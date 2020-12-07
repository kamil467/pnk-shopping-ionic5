import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable,throwError  } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Product } from "../interfaces/product-category";
import { environment } from '../../environments/environment'
@Injectable({ providedIn: "root" })
export class ProductListProvider {
  
  /* Data Initialization */
  constructor(public http: HttpClient) {}

  getProductsByCategory(categroyCode:string):Observable<Product[]>
  {
    return this.http.get<Product[]>(environment.productCategoryListAPI)
    .pipe(
   retry(3),
   catchError(this.handleError)
    );
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
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}
}
