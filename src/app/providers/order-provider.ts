import { Injectable } from "@angular/core";
import { of, Observable,throwError  } from "rxjs";
import { catchError, concatMap, map, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { OrderSummary, OrderSummaryToBeDisplayed } from "../interfaces/order-interface";
import { BasketFooterObj, BasketObj, OrderItem } from "../interfaces/basket-interface";
import { BasketProvider } from "./basket-provider";
import { environment } from '../../environments/environment';

@Injectable()
export class OrderProvider {

 // Data initilaization//

  constructor(private basketProvider: BasketProvider, private httpClient:HttpClient) {
 
  }
  
placeOrder():Observable<number>
{
  //make calls to firebase and update the order.
 return of(1); // 1- success
}

getHistoryOrderByOrderSummaryId(orderSummaryId:string):Observable<OrderSummaryToBeDisplayed>
{
  // seperate call to get order summary - single item
  // seperate call to get orderItems - multiple itmes
  let orderSummary :OrderSummary;
  let orderedItems:OrderItem[];
  let summaryToBeDisplayed:OrderSummaryToBeDisplayed;
 const orderSummaryOb = this.httpClient.get<OrderSummary>(environment.orderHistorySummaryAPI);
const orderedItemsOb = orderSummaryOb.pipe(map(m => orderSummary = m),concatMap(
  summary => 
  this.httpClient.get<OrderItem[]>(environment.orderedItemsAPI+ summary.customerId).pipe(map(oItem => orderedItems = oItem)) 
  ),
retry(3),
catchError(err => this.handleError(err))
); 
 orderedItemsOb.subscribe(()=>{
  summaryToBeDisplayed = {
    orderItems:orderedItems,
    orderSummary : orderSummary,
  }
});
return of(summaryToBeDisplayed);
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
