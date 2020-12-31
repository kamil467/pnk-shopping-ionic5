import { Injectable } from "@angular/core";
import { of, Observable,throwError, concat  } from "rxjs";
import { catchError, concatMap, map, mergeMap, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CustomerDeliveryPersonalInfo, OrderSummary, OrderSummaryToBeDisplayed } from "../interfaces/order-interface";
import { BasketFooterObj, BasketObj, OrderItem } from "../interfaces/basket-interface";
import { BasketProvider } from "./basket-provider";
import { environment } from '../../environments/environment';
import { Customer } from "../interfaces/account-interface";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class OrderProvider {

 // Data initilaization//

  constructor(private basketProvider: BasketProvider, private httpClient:HttpClient,
    private angularFireStore: AngularFirestore) {
 
  }
  
  //true - success 
  // false - fail
placeOrder(basketObj:BasketObj,customer:Customer):Promise<boolean>
{
  // build 
  // order summary
// caluclate totalOrderValue

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
  totalItems:totalItemCount,
  totalOrderValue:totalOrderValue  // excluding delivery charge.
 }
const customerDeliveryPersonalInfo: CustomerDeliveryPersonalInfo ={
  contactNo:customer.phoneNumber,
  deliveryLocation:customer.address, 
  landmark:customer.landmark,
  postCode:customer.postCode,
  id:null, // auto generated id.
}
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

getHistoryOrderByOrderSummaryId(orderSummaryId:string):Observable<OrderSummaryToBeDisplayed>
{
  // seperate call to get order summary - single item
  // seperate call to get orderItems - multiple itmes
  let orderSummary :OrderSummary;
  let orderedItems:OrderItem[];
  let summaryToBeDisplayed:OrderSummaryToBeDisplayed;
  let personalDeliveryInfo:CustomerDeliveryPersonalInfo;
 const orderSummaryOb = this.httpClient.get<OrderSummary>(environment.orderHistorySummaryAPI);
const orderedItemsOb = orderSummaryOb.pipe(map(m => orderSummary = m),concatMap(
  summary => 
  this.httpClient.get<OrderItem[]>(environment.orderedItemsAPI).pipe(map(oItem => orderedItems = oItem)) 
  ),
retry(3),
catchError(err => this.handleError(err))
); 
const deliveryInfo = orderedItemsOb.pipe(concatMap(c => 
 this.httpClient.get<CustomerDeliveryPersonalInfo>(environment.customerDeliveryInfoAPI).pipe(map(personalInfo => 
  personalDeliveryInfo = personalInfo))),
retry(3),
catchError(err => this.handleError(err)));
let result = deliveryInfo.pipe(map( m => {
  console.log("Shop Name:"+m.deliveryLocation);
  return summaryToBeDisplayed = {
    orderItems:orderedItems,
    orderSummary:orderSummary,
    customerDeliveryInfo:m
  }
}));
return result;
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
}
