import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, Optional } from "@angular/core";
import { of, Observable,throwError, from  } from "rxjs";
import { catchError, first, mergeMap, retry, toArray } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Product, ProductCategoryProductMapping } from "../interfaces/product-category";
import { environment } from '../../environments/environment'
import { AngularFirestore } from "@angular/fire/firestore";
import { Shop } from "../interfaces/shop-list";
@Injectable({ providedIn: "root" })
export class ProductListProvider {
  
  /* Data Initialization */
  constructor(public http: HttpClient,
    private angularFireCloudStore: AngularFirestore) {}

  getProductsByCategory(categroyCode:string):Observable<Product[]>
  {
    return this.http.get<Product[]>(environment.productListAPI)
    .pipe(
   retry(3),
   catchError(err =>this.handleError(err))
    );
      }

 getActiveProductMappingListByCategoryCode(categorCode:string,shopCode:string):Observable<ProductCategoryProductMapping[]>
 {

   const productsMapResult = this.angularFireCloudStore
                         .collection(environment.SHOP_LIST_COLLECTION)
                         .doc(shopCode)
                         .collection<ProductCategoryProductMapping>(environment.PRODUCT_CATEGORY_MAPPING, ref => ref.where("categoryId","==",categorCode))
                         .valueChanges()
                         .pipe(catchError(err => this.handleError(err,"getActiveProductMappingListByCategoryCode")));                   
return productsMapResult;
 }


 getActiveProduct(productId:string,shopCode:string):Observable<Product>
 {
  const productRef = this.angularFireCloudStore.collection(environment.SHOP_LIST_COLLECTION)
                     .doc(shopCode)
                     .collection<Product>(environment.PRODUCT_LIST,ref => ref.where("status","==","a"))
                     .doc(productId)
                      .valueChanges()
                      .pipe(map(finalData => {
                        console.log("data is :"+finalData.name);
                        return ({...finalData,id:productId})   // load the id.
                      }),
                        catchError(err => this.handleError(err,"getActiveProduct")));
                     return productRef;
  
 }


 getActiveProductList(categoryCode:string,shopCode:string):Observable<Product[]>
 {
   const productList = this.getActiveProductMappingListByCategoryCode(categoryCode,shopCode)
                      .pipe(
                       mergeMap((productMapping:ProductCategoryProductMapping[]) => 
                       from(productMapping).pipe(
                        mergeMap(
                          pMap => this.getActiveProduct(pMap.productId,shopCode)
                          .pipe(map(
                           product =>  ({...product})
                          ),first()
                          ) 
                        ),toArray(),
                       ),
                       ),
                       catchError(err => this.handleError(err,"getActiveProductList"))
                      );
                      return productList;
 }

 ///Get products list for special offerzone
 getOfferZoneProducts(shopCode:string):Observable<Product[]>
 {
  const offerZoneRef = this.angularFireCloudStore
  .collection<Shop>(environment.SHOP_LIST_COLLECTION)
  .doc(shopCode)
  .collection<Product>(environment.OFFER_ZONE)
  .valueChanges()
  .pipe(catchError(err =>this.handleError(err)));

  return offerZoneRef;
 
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
