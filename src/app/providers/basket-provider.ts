import { Injectable } from "@angular/core";
import { of, Observable,throwError, from  } from "rxjs";
import { BasketFooterObj, BasketObj, OrderItem } from "../interfaces/basket-interface";
import { Product } from "../interfaces/product-category";
import { Shop } from "../interfaces/shop-list";

@Injectable({ providedIn: "root" })
export class BasketProvider {
  public myBasket: BasketObj;
  public footerObj: BasketFooterObj;

  initiateBasket(shop: Shop): Observable<BasketObj> {
    if (shop != null) {
      this.myBasket = {
        storeName: shop.name,
        serviceArea: shop.serviceArea,
        storeCode: shop.storeCode,
        totalItemsCount:0,
        items:new Array<OrderItem>(),
      };
      return of(this.myBasket);
    }
    return null;
  }
  addItemToBasketOverload(item: OrderItem) {
    if (this.myBasket.items == undefined || this.myBasket.items.length == 0) {
      this.myBasket.items = new Array();
      this.myBasket.items.push(item);
    } else {
      let isFound = this.myBasket.items.find(
        i => i.productId == item.productId
      );
      if (isFound != undefined || isFound != null) {
        // item has been found.
        console.log("Item found");
        isFound.quantity = isFound.quantity + 1;
        isFound.totalPrice = isFound.pricePerQuantity * isFound.quantity;
      } else {
        this.myBasket.items.push(item);
      }
    }
  }

  addItemToBasket(item: Product) {
    console.log("basket code 1");
    // check for existing productId.
    if (this.myBasket.items == undefined || this.myBasket.items.length == 0) {
      let oderItem: OrderItem = {
        orderItemId:null,
        name: item.name,
        pricePerQuantity: item.offeredPrice,
        productId: item.id,
        quantity: 1,
        productImageUrl: item.productImageUrl,
        totalPrice: item.offeredPrice
      };
       console.log("basket code 2");
      this.myBasket.items = new Array();
      this.myBasket.items.push(oderItem);
      console.log("Items pushed");
    } else {
       console.log("basket code 3");
      let isFound = this.myBasket.items.find(i => i.productId == item.id);
      if (isFound != undefined || isFound != null) {
        // item has been found.
         console.log("basket code 4");
        console.log("Item found");
        isFound.quantity = isFound.quantity + 1;
        isFound.totalPrice = isFound.pricePerQuantity * isFound.quantity;
      } else {
         console.log("basket code 5");
        console.log("else reszult" + isFound);
        let oderItem: OrderItem = {
          orderItemId:null,
          name: item.name,
          pricePerQuantity: item.offeredPrice,
          productId: item.id,
          quantity: 1,
          productImageUrl: item.productImageUrl,
          totalPrice: item.offeredPrice
        };
        this.myBasket.items.push(oderItem);
      }
    }
  }
  getBasketObj(storeCode: string): Observable<BasketObj> {
    console.log("console.is here...............");
    return of(this.myBasket);
  }

  getFooterObj(orderItems: OrderItem[]): Observable<BasketFooterObj> {
    console.log("code is here");
    let footerBasket: BasketFooterObj;
    let totalItemCount: number = 0;
    let totalBasketAmount: number = 0;
    if (orderItems != undefined) {
      if (orderItems.length > 0) {
        orderItems.forEach(i => {
          totalItemCount = totalItemCount + i.quantity;
          totalBasketAmount = totalBasketAmount + i.totalPrice;
        });
      } else {
        // array initialized but empty.
        console.log("array is empty")
      }
    } else {
      // array not initialized yet.
    }
    footerBasket = {
      storecode: "storecode",
      totalBasket: totalBasketAmount,
      totalItemCount: totalItemCount
    };
    console.log(footerBasket.totalItemCount);
    this.footerObj = footerBasket;
    return of(footerBasket);
  }

  removeItemFromBasket(item: OrderItem) {
    let isFound = this.myBasket.items.find(i => i.productId == item.productId);
    if (isFound != undefined || isFound != null) {
      // item has been found.
      console.log("Item found");
      isFound.quantity = isFound.quantity - 1;
      isFound.totalPrice = isFound.pricePerQuantity * isFound.quantity;
      if (isFound.quantity == 0) {
        // pop out the item from array.
        let itemToRemovedIndex = this.myBasket.items.findIndex(
          i => i.productId == item.productId
        );
        this.myBasket.items.splice(itemToRemovedIndex, 1);
      }
    } else {
      // fatal error. display popup alert.
    }
  }
  getFooterObjForOrder(): Observable<BasketFooterObj> {
    return of(this.footerObj);
  }

  getBasketForOrder(): Observable<BasketObj> {
    console.log("Basket Code  for norder");
    return of(this.myBasket);
  }

  emptyBasket() {
    this.myBasket.items = undefined;
  }

  emptyProductAllQuantity(item: OrderItem) {
    let itemToRemovedIndex = this.myBasket.items.findIndex(
      i => i.productId == item.productId
    );
    this.myBasket.items.splice(itemToRemovedIndex, 1);
  }
  getTotalItemCount():number
  { 
  return this.footerObj.totalItemCount;
  }
}
