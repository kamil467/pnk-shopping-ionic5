import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentChangeAction } from "@angular/fire/firestore";
import { of, Observable,throwError  } from "rxjs";
import { catchError, first, retry, toArray } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment'
import { ProductCategory, ProductCategory1 } from "../interfaces/product-category";
@Injectable({ providedIn: "root" })
export class CategoryListProvider {
  
  /* Data Initialization */
  constructor(public http: HttpClient, private angularFireCloudStore: AngularFirestore) {}


getProductCategoryList(shopCode:string):Observable<ProductCategory[]>
{
  
return this.http.get<ProductCategory[]>(environment.productCategoryListAPI)
.pipe(
  retry(3),
  catchError(this.handleError)
);
}

//Get active product catgeory for the given shopCode.
getActiveProductCategoryListByShopCode(shopCode:string):Observable<ProductCategory1[]>
{

const productCategoryRef = this.angularFireCloudStore
                            .collection(environment.SHOP_LIST_COLLECTION)
                            .doc(shopCode)
                            .collection<ProductCategory1>(environment.PRODUCT_CATEGORY, ref => ref.where("status","==","a"))
                            .snapshotChanges()
                            .pipe(
                              map(data =>{
                                return data.map(finalData =>{
                                    const propdCatObj = finalData.payload.doc.data() as ProductCategory1
                                    const id  = finalData.payload.doc.id

                                    return {id, ...propdCatObj}
                                }
                                )
                              }),
                              catchError(err => this.handleError(err)));
                            
                            return productCategoryRef;


}

fireBaseToProductCategoryConverter(payload: DocumentChangeAction<ProductCategory1>):ProductCategory1
{

  const productCat:ProductCategory1 ={
    id:payload.payload.doc.id,
    imageURL:payload.payload.doc.data().imageURL,
    name:payload.payload.doc.data().name,
    status:payload.payload.doc.data().status 
  }
  return productCat;
}




  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);

      console.error("Detailed error is:"+error);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}
}
