import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController, Platform } from "@ionic/angular";
import { concat, from,  Observable, of, throwError } from "rxjs";
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
  newB:Observable<BasketFooterObj>;
  constructor(
    public categoryListProvider: CategoryListProvider,public alert:AlertController,public loadingController:LoadingController, public basketProvider: BasketProvider,public shopProvider:ShopListProvider,public platform:Platform
  ) {
 this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
  });
  
  }
  
async ngOnInit(){

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

ionViewWillEnter()
{
  console.log("ViewWillEnter");
 this.getBasketFromMemory();
}

  ionViewDidEnter() {
      console.log("ViewDidEnter");
    this.defaultHref = `/app/tabs/market/shoplist`;
     this.getBasketFromMemory();
  }
 getBasketFromMemory()
{
  this.newB = this.basketProvider.getFooterObjForOrder();
  /**this.basketProvider.getFooterObjForOrder()
  .subscribe(f => {this.basketFooterObj = f},
  (error) =>{
    this.presentAlert(error,"reloadBasket-ionViewWillEnter-");
  });
  **/
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
}
