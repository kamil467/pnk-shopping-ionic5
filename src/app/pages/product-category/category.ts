import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { concat, from,  Observable, throwError } from "rxjs";
import { catchError, concatMap } from "rxjs/operators";
import { BasketFooterObj, BasketObj } from "../../interfaces/basket-interface";
import { ProductCategory } from "../../interfaces/product-category";
import { Shop, StoreServiceArea } from "../../interfaces/shop-list";
import { BasketProvider } from "../../providers/basket-provider";
import { CategoryListProvider } from "../../providers/product-category-provider";
import { ShopListProvider } from "../../providers/shoplist-provider";
import { BuildGridArray } from "../../Utility/utility";


/**
 * Generated class for the ShoplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-categoryList",
  templateUrl: "category.html",
    styleUrls: ["category.scss"]
})
export class CategoryListPage implements OnInit {
  shopCode: string;
  categoryList: ProductCategory[];
  rowCount: Array<ProductCategory[]>;
   basketFooterObj: BasketFooterObj;
  basketObj: BasketObj;
  defaultHref='';
  shopObj:Shop;
  constructor(
    public categoryListProvider: CategoryListProvider,public alert:AlertController,public loadingController:LoadingController, public basketProvider: BasketProvider,public shopProvider:ShopListProvider
  ) {
 
  }
  
   ionViewDidEnter() {
    this.defaultHref = `/app/tabs/market/shoplist`;
  }
async ngOnInit(){
  this.basketFooterObj = {
  storecode:"storecode",
  totalBasket:0,
  totalItemCount:0
}
   const loading =  await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    loading.present();    
    /* Load Grid Items */                                         
 this.categoryListProvider.getProductCategoryList("shopCode")
 .subscribe( c => {
   this.categoryList = c;
    this.rowCount = BuildGridArray(this.categoryList,3);
   loading.dismiss();
   },
  (error) =>{
    this.presentAlert(error,"categoryList");
  },
  );
  /*End of Grid Events */
  await this.loadBasket();
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

 async loadBasket()
{
const shopSubscribe = this.shopProvider.getShopByCode("1234");
const basketShopSubscribe = shopSubscribe.pipe(concatMap(b =>this.basketProvider.initiateBasket(b)),
catchError(error => throwError(error))
);
basketShopSubscribe.subscribe(b => {this.basketObj = b},(error)=>{
  this.presentAlert(error,"basket-loader");
}); 
}
}
