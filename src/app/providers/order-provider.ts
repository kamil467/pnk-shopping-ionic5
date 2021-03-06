import { Injectable } from "@angular/core";
import { of, Observable,throwError, concat, from, merge  } from "rxjs";
import { catchError, concatMap, first, map, mergeMap, retry, toArray } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CustomerDeliveryPersonalInfo, OrderSummary, OrderSummaryToBeDisplayed } from "../interfaces/order-interface";
import { BasketFooterObj, BasketObj, OrderItem } from "../interfaces/basket-interface";
import { BasketProvider } from "./basket-provider";
import { environment } from '../../environments/environment';
import { Customer } from "../interfaces/account-interface";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireMessaging } from "@angular/fire/messaging";
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
@Injectable()
export class OrderProvider {

 // Data initilaization//

  constructor(private basketProvider: BasketProvider, private httpClient:HttpClient,
    private angularFireStore: AngularFirestore,private fcm : FCM,
    private afMessaging:AngularFireMessaging) {
 
  }
  getUserTokenId():string
  {
    let token =null;
    const tokeRef = this.afMessaging.getToken.subscribe(result =>{
      if(result)
      {
      token = result;
      }
      else{
        console.error("Token Id is null");
      }
    })
    return token;
  }
  
  //true - success 
  // false - fail
placeOrder(basketObj:BasketObj,customer:Customer):Promise<boolean>
{
  // build 
  // order summary
// caluclate totalOrderValue
console.log("Basket obj before order");
console.log(basketObj);
// orderedItems already present in basketOBj.
let totalOrderValue = 0;
let totalItemCount = 0;

basketObj.items.forEach(x =>{
  totalOrderValue = totalOrderValue+ x.totalPrice ;
  totalItemCount = totalItemCount + x.quantity;                   
})
 const orderSummary:OrderSummary =
 {
  shopName:basketObj.storeName,
  storeCode:basketObj.storeCode,
  id:null, // auto genreated ID
  customerId:customer.customerId,
  deliveryCharge:basketObj.deliveryOrderConfig.deliveryCharge,
  reason:null,
  status:"placed",
  additionalRequest:null,
  lastUpdatedTimeStamp:new Date(),
  creationTime:new Date(),
  totalItems:totalItemCount,
  totalOrderValue:totalOrderValue  // excluding delivery charge.
 }


let customerDeliveryPersonalInfo: CustomerDeliveryPersonalInfo ={
  contactNo:customer.phoneNumber,
  deliveryLocation:customer.address, 
  landmark:customer.landmark,
  postCode:customer.postCode,
  id:null, // auto generated id.
  userTokenId:null// null if no token generated this.getUserTokenId() 
}

this.getFCMToken().then((tokenId) =>{
  customerDeliveryPersonalInfo.userTokenId = tokenId;
})

// first --> Firebase API call to store OrderSummary
// if success -- >  make 2nd API get the id of doucment and create a new collection ordered_items
// if success (first call)  -- make 3rd API to create customerpersonalDeliveryInfo.
// Call 2 and 3 will be mergeCall with concatination of first API call.
const placeOrderRef = this.angularFireStore
                      .collection<OrderSummary>(environment.ORDER_SUMMARY)
                      .add(orderSummary)
                      .then((result)=>{
                        // success
                        const documentId = result.id; // get id.
                       basketObj.items.forEach(item => {
                        result.collection(environment.ORDERED_ITEMS).add(item);
                       });
                       result.collection(environment.CUSTOMER_DELIVERY_PERSONAL_INFO).add(customerDeliveryPersonalInfo)
                       return true;
                      }).catch(err =>{
                        this.handleError(err);
                        return false;
                      })
         
                      return placeOrderRef;
}



getRecentOrdersByCustomerId(customerId:string):Observable<OrderSummaryToBeDisplayed[]>
{
let orderSumData :OrderSummaryToBeDisplayed;
  const finalOrderRef = this.getOrderSummary(customerId)
                       .pipe(
                         concatMap(orderSummary => 
                          from(orderSummary) .pipe(
                            mergeMap(
                              orderSum => 
                              this.getOrderedItemsBySummaryId(orderSum.id)
                          .pipe(map(itemsData =>  ({...orderSumData,orderItems:itemsData,orderSummary:orderSum})),first()
                           )),
                           mergeMap(deliveryInfo => this.getCustomerDeliveryInfo(deliveryInfo.orderSummary.id)
                           .pipe(map(deliveryData => ({...deliveryInfo,customerDeliveryInfo:deliveryData})),
                           first(),
                           ),),toArray(),
                           )));          
return finalOrderRef;


}

getOrderedItemsBySummaryId(summaryId:string):Observable<OrderItem[]>
{
  const orderItemRef = this.angularFireStore
                        .collection<OrderItem>(environment.ORDER_SUMMARY+"/"+summaryId+"/"+environment.ORDERED_ITEMS)
                        .snapshotChanges()
                        .pipe(map(doc =>
                          {
                            return doc.map( item =>
                              {
                                
                                const r = item.payload.doc.ref;
                                r.onSnapshot(s =>{
                                  includeMetadataChanges:true;   // refresh subcollection
                                })


                              const id = item.payload.doc.id;
                              const payloadData = item.payload.doc.data() as OrderItem;
                              return ({...payloadData,orderItemId:id});
                              })
                          }),catchError(err => this.handleError(err)));

                        return orderItemRef;
}

getCustomerDeliveryInfo(summaryId:string):Observable<CustomerDeliveryPersonalInfo>
{
  const customerDeliveryInfoRef = this.angularFireStore
                       .collection<OrderSummary>(environment.ORDER_SUMMARY)
                       .doc(summaryId)
                        .collection<CustomerDeliveryPersonalInfo>(environment.CUSTOMER_DELIVERY_PERSONAL_INFO)
                        .valueChanges()
                        .pipe(map(result =>{
                          return result[0];
                        }));

                        return customerDeliveryInfoRef;
}


getOrderSummary(customerId:string):Observable<OrderSummary[]>
{
  const orderSummaryRef = this.angularFireStore
  .collection<OrderSummary>(environment.ORDER_SUMMARY,ref => ref.where("customerId","==",customerId))
  .snapshotChanges()
  .pipe(map(item =>{

    return item.map(finalData =>{
      const id = finalData.payload.doc.id;
      const payloadData = finalData.payload.doc.data() as OrderSummary;
         return  ({...payloadData,id:id})
    })
    }))
return orderSummaryRef;

}


private handleError(error: HttpErrorResponse,caller:string= null) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
      console.error("Detailed error is :"+error +"and caller is:"+caller);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}
async getFCMToken():Promise<string> {

  let fcmtoken:string = null;
 await this.fcm.getToken().then(token => {
    // Register your new token in your back-end if you want
    // backend.registerToken(token)
    fcmtoken =  token;   
  }).catch(()=>{
    fcmtoken="no-token";
  });
  return fcmtoken;
}

}
