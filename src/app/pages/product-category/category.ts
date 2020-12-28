import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertController, LoadingController,  NavController, Platform } from "@ionic/angular";
import { concat, from,  Observable, of, throwError } from "rxjs";
import { catchError, concatMap } from "rxjs/operators";
import { BasketFooterObj, BasketObj } from "../../interfaces/basket-interface";
import { ProductCategory  } from "../../interfaces/product-category";
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
  productCatgeoryListObservable:Observable<ProductCategory[]>

  shopCode: string;
  basketFooterObj: BasketFooterObj;
  basketObj: BasketObj;
  defaultHref='';
  shopObj:Shop;
  newB:Observable<BasketFooterObj>;
  counter:number;

  constructor(
    public categoryListProvider: CategoryListProvider,public alert:AlertController,
    public loadingController:LoadingController, public basketProvider: BasketProvider,
    public shopProvider:ShopListProvider,public platform:Platform,public navCtrl: NavController,
    private route: ActivatedRoute
  ) {
 this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
  });
 this.counter =0;
  }
  
async ngOnInit(){
  const storeCode = this.route
                    .snapshot
                    .paramMap
                    .get('storeCode'); //get the shopcode from params

    /** firebase implementation started */
    /* Responsive Grid implementation */     
    this.productCatgeoryListObservable =  this.categoryListProvider
                                          .getActiveProductCategoryListByShopCode(storeCode);
/***Firebase implementation ended. */
  /*End of Grid Events */
   await this.loadBasket();
}

 async loadBasket()
{
const shopSubscribe = this.shopProvider.getShopByCode("1234");
const basketShopSubscribe = shopSubscribe.pipe(concatMap(b =>this.basketProvider.initiateBasket(b)),
catchError(error => throwError(error))
);
basketShopSubscribe.subscribe(b => {
  this.basketObj = b;
  this.counter++;
  },(error)=>{
  this.presentAlert(error,"basket-loader");
});
}

ionViewWillEnter()
{
  console.log("ViewWillEnter");
  if(this.counter != 0){
    console.log("counter is :"+this.counter);
 this.getBasketFromMemory();
  }
}

  ionViewDidEnter() {
      console.log("ViewDidEnter");
    this.defaultHref = `/app/tabs/market/shoplist`;
    // this.getBasketFromMemory();
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
  async backButton()
  {
    this.basketProvider.getFooterObjForOrder().subscribe(async x =>{
      if(x == undefined){
        this.navCtrl.pop();
      }else if(x.totalItemCount == 0){
        this.navCtrl.pop();
      } else if(x.totalItemCount !=0)
       await this.presentConfirm();
    });
  }

   getBasketFromMemory()
{
const basketObjObser = this.basketProvider.getBasketObj("storecode");
const footerObser = basketObjObser.pipe(concatMap(b => this.basketProvider.getFooterObj(b.items)),
catchError(err => throwError(err)));
footerObser.subscribe(f => {this.basketFooterObj=f},
async (error) =>{
 await this.presentAlert(error,"getBasketFromMemory");
}
);
}

 async presentConfirm() {

}
}
