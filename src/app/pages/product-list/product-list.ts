import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertController, LoadingController, NavController, Platform } from "@ionic/angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {  BasketObj } from "../../interfaces/basket-interface";
import { Product } from "../../interfaces/product-category";
import { BasketProvider } from "../../providers/basket-provider";
import { ProductListProvider } from "../../providers/product-list.provider";

/**
 * Generated class for the ShoplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-product-list",
  templateUrl: "product-list.html",
    styleUrls: ["product-list.scss"]
})
export class ProductListPage implements OnInit {
allProductsAbservable:Observable<Product[]>
basketObjObservable:BasketObj
  defaultHref='';
  categoryName:string;
constructor(public productListProvider:ProductListProvider,public basketProvider: BasketProvider,
public loader:LoadingController,public alert:AlertController,public nvctrl:NavController,
private route: ActivatedRoute,public platform:Platform)
{

}
   ionViewDidEnter() {
    this.defaultHref = `/app/tabs/market/product-category-list`;
    this.getBasketFromMemory();
  }

  // call product-list API to load active products. 
 ngOnInit() { 
  this.platform.backButton.subscribeWithPriority(10, async () => {
  this.nvctrl.pop();
     });
const storeCode = this.route
                 .snapshot
                 .paramMap
                 .get('storeCode'); //get the shopcode from params
const productCategoryCode = this.route
                            .snapshot
                            .paramMap
                            .get('productCategoryCode');  // get the productcategoryCode.
                            this.categoryName = this.route
                            .snapshot
                            .paramMap
                            .get("categoryName");
                            
 this.allProductsAbservable=  this.productListProvider
                             .getActiveProductList(productCategoryCode,storeCode); // observable will be called on template  
    this.getBasketFromMemory();
}

// get latest basket from in-memory.
 getBasketFromMemory()
{
  this.basketObjObservable = this.basketProvider.getBasketDirect();

}
  async presentAlert(errorMessage:any,componenet:string) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Error Occurred:'+errorMessage,
      message: 'Error:'+componenet,
      buttons: ['OK']
    });
    await alert.present();
  }

  addToBasket(product: Product) {
    console.log("add to basket clicked"+product.name);
    // build orderItem.

    if(!product.inStock)
    {
      //do nothing
      return;
    }
     this.basketProvider.addItemToBasket(product);
     this.getBasketFromMemory();
  // refresh the basket everytim.// local call - no expensive service call.
  }

}