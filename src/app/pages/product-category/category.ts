import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertController, LoadingController,  NavController, Platform } from "@ionic/angular";
import { concat, from,  Observable, of, Subscription, throwError } from "rxjs";
import { catchError, concatMap, delay, map } from "rxjs/operators";
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
export class CategoryListPage implements OnInit{
  productCatgeoryListObservable:Observable<ProductCategory[]>
  defaultHref='';
  basketDirect:BasketObj;
  shopSubscription:Subscription;

  constructor(
    public categoryListProvider: CategoryListProvider,public alert:AlertController,
    public loadingController:LoadingController, public basketProvider: BasketProvider,
    public shopProvider:ShopListProvider,public platform:Platform,public navCtrl: NavController,
    private route: ActivatedRoute,
    private changeRef: ChangeDetectorRef
  ) {
    const storeCode = this.route
                    .snapshot
                    .paramMap
                    .get('storeCode'); //get the shopcode from params
 this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
  });
 
  }
  
 ngOnInit(){
  const storeCode = this.route
                    .snapshot
                    .paramMap
                    .get('storeCode'); //get the shopcode from params

   // load product category.
    this.productCatgeoryListObservable =  this.categoryListProvider
                                          .getActiveProductCategoryListByShopCode(storeCode)

   // initiate the basket. (load shop data and then initaite basket)                                      
   this.shopSubscription =  this.shopProvider
   .getActiveShopByStoreCode(storeCode).subscribe(shop =>{
    if(shop != undefined)
    {
      this.basketDirect = this.basketProvider.initiateBasket(shop);  // load basket first time.
    }
    else{
      //could not load basket
       console.error("Could not load the basket");
    }
   });
   
}
ionViewWillEnter()
{
  console.log("ViewWillLoad");
  this.basketDirect = this.basketProvider.getBasketDirect();
}

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/market/shoplist`;
 
   this.basketDirect = this.basketProvider.getBasketDirect();
   console.log(this.basketDirect);
    
  }

  async backButton()
  {
    console.log("Back button clicked");
   const updatedBasket = this.basketProvider.getBasketDirect();
 
   console.log(updatedBasket);
    if(updatedBasket.totalItemsCount == 0)
    {
      // navigate to page
      console.log("allow to navigate");
      this.navCtrl.pop();
    }
    else{
     await this.presentAlert();
      console.log("Display popup");
    }
  
  }
  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Back to Market?',
      message: 'you have items in your cart. Cart will be empty if you press Ok.',
      buttons: [
      {
        text:'Ok',
        handler:()=>{
       // this.basketProvider.emptyBasket();  system automatically clear the basket.
        this.navCtrl.pop();
        }
      },
      {
        text:'Cancel',
        handler:()=>{
          console.log("do nothing");
        }

      }
      
      ]

    });
    await alert.present();
  }

  ionViewDidLeave()
  {
    console.log("ionViewDidLeave called");
    this.shopSubscription.unsubscribe();
  }
  ngOnDestroy()
  {
    this.shopSubscription.unsubscribe();
  }
}
