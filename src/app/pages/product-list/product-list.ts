import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Observable, throwError } from "rxjs";
import { catchError, concatMap } from "rxjs/operators";
import { BasketFooterObj, BasketObj, BasketObj } from "../../interfaces/basket-interface";
import { Product } from "../../interfaces/product-category";
import { Shop } from "../../interfaces/shop-list";
import { BasketProvider } from "../../providers/basket-provider";
import { ProductListProvider } from "../../providers/product-list.provider";
import { BuildGridArray } from "../../Utility/utility";

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
  allProducts: Product[];
  rowItems: Array<Product[]>;
   shop: Shop;
  basketObj: BasketObj;
  basketFooterObj: BasketFooterObj;
  
constructor(public productListProvider:ProductListProvider,public basketProvider: BasketProvider,
public loader:LoadingController,public alert:AlertController)
{

}

async ngOnInit() {

  const loading =  await this.loader.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  this.productListProvider.getProductsByCategory("categoryCode")
  .subscribe(async pl => {
    this.allProducts = pl;
   this.rowItems= BuildGridArray(this.allProducts,2);
    await loading.dismiss();
  },
  async (error) =>  {
    await this.presentAlert(error,"getProductsByCategory");
  }
  )
    await this.getBasketFromMemory();
}
async getBasketFromMemory()
{
const basketObjObser = this.basketProvider.getBasketObj("storecode");
const footerObser = basketObjObser.pipe(concatMap(b => this.basketProvider.getFooterObj(b.items)),
catchError(err => throwError(err)));
footerObser.subscribe(f => {this.basketFooterObj},
async (error) =>{
 await this.presentAlert(error,"getBasketFromMemory");
}
);
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

  async ionViewWillEnter()
  {
  
  
  }
}