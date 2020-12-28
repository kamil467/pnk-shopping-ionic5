import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable,throwError, merge, from  } from "rxjs";
import { catchError, first, mergeMap, retry, toArray } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Shop,  StoreServiceArea } from "../interfaces/shop-list";
import { environment } from '../../environments/environment'
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({ providedIn: "root" })
export class ShopListProvider {
  
  /* Data Initialization */
  constructor(public http: HttpClient, private angularFireCloudStore: AngularFirestore) {}

  getShopsByCategory(shopTypeCode: string):Observable<Shop[]> {
    return this.http.get<Shop[]>(
      environment.shopListAPI
    ).pipe(
         retry(3),
      catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error("Error occurred:"+error);
      
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}
getShopByCode(shopCode:string):Observable<Shop>
{
  return this.http.get<Shop>(environment.shopAPI).pipe(
    retry(3),
    catchError(this.handleError)
  );
}
// Firebase integration

 getActiveShopsByCategoryFirebase(categoryCode:string):Observable<Shop[]>
{
  console.log("code inside shopList: category code is:"+categoryCode);
  const shopValueChangeRef = this.angularFireCloudStore
.collection<Shop>(environment.SHOP_LIST_COLLECTION, ref => ref.where("categoryCode","==",categoryCode).where("status","==","a"))
.valueChanges()
.pipe(
  mergeMap((shopLiArray:Shop[]) => 
  // load shop[]
  from(shopLiArray).pipe(
    // foreach shop
mergeMap(
  shop =>
  this.getActiveShopServiceArea(shop.storeCode,shop)
  .pipe(map(seerviceArea => ({...shop, serviceArea:seerviceArea})),first()
  ),) ,
   toArray()),
   ));
  
//.pipe(catchError(err => this.handleError(err)));
return shopValueChangeRef;
}

getActiveShopServiceArea(shopCode:string,shopObj:Shop):Observable<StoreServiceArea[]>
{
  //this.testMethod();
  console.log("code is here::"+shopCode);
  const serviceArea = this.angularFireCloudStore
                      .collection(environment.SHOP_LIST_COLLECTION)
                      .doc(shopCode)
                      .collection<StoreServiceArea>(environment.SHOP_SERVICE_AREA)
                      .valueChanges()
                      .pipe(catchError( c => this.handleError(c)));                    
                    
                      console.log("Area code is executed");
                      return serviceArea;
}

//Get Active shop from firebase -- at this stage func receive only active shop code.
getActiveShopByStoreCode(storeCode:string):Observable<Shop>
{

  const shop = this.angularFireCloudStore           
               .collection<Shop>(environment.SHOP_LIST_COLLECTION)
               .doc(storeCode)
               .valueChanges()
               .pipe(catchError(err => this.handleError(err)));
               return shop;
}

}
