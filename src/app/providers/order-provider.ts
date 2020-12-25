import { Injectable } from "@angular/core";
import { of, Observable,throwError  } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { OrderSummaryToBeDisplayed } from "../interfaces/order-interface";
import { BasketFooterObj, BasketObj } from "../interfaces/basket-interface";
import { BasketProvider } from "./basket-provider";


@Injectable()
export class OrderProvider {

 // Data initilaization//

orderSummaryToDisplay:OrderSummaryToBeDisplayed=
{
  orderSummary : {
    id:"1",
    additionalRequest:"bring paper cup 1",
    customerId:"1001",
    shopCode:1234,
    shopName:"ABC elite shop",
    status:"a",
    orderStage:"Prepared",
    totalItems:23,
    totalOrderValue:260,
    reason:"waiting to handover to delivery agent",
    lastUpdatedTimeStamp: new Date()
  },
  orderItems:[
    {
      orderItemId:"O123",
      name:"Lays Green",
      pricePerQuantity:5,
      productId:"3090",
      productImageUrl:null,
      quantity:5,
      totalPrice:25
    },
    {
      orderItemId:"O127",
      name:"Orio Biscuit",
      pricePerQuantity:20,
      productId:"3040",
      productImageUrl:null,
      quantity:5,
      totalPrice:25
    },
  ]
}
 // End-Data initialization
  basketObj: BasketObj;
  footerObj: BasketFooterObj;
  constructor(private basketProvider: BasketProvider) {
    this.basketProvider
      .getFooterObjForOrder()
      .subscribe(f => (this.footerObj = f));
    this.basketProvider
      .getBasketForOrder()
      .subscribe(b => (this.basketObj = b));
  }
  
placeOrder():Observable<number>
{
  //make calls to firebase and update the order.
 return of(1); // 1- success
}
getActiveOrder(customerId:string):Observable<OrderSummaryToBeDisplayed[]>
{
  let orderSummaryArray : OrderSummaryToBeDisplayed[] =[
    this.orderSummaryToDisplay
  ] 
 return of(orderSummaryArray);
}

getHistoryOrder(customerId:string):Observable<OrderSummaryToBeDisplayed[]>
{
  // seperate call to get order summary - single item
  // seperate call to get orderItems - multiple itmes

}

}
