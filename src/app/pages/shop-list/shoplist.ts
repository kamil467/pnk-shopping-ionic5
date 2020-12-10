import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Observable } from "rxjs";
import { Shop, StoreServiceArea } from "../../interfaces/shop-list";
import { ShopListProvider } from "../../providers/shoplist-provider";


/**
 * Generated class for the ShoplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-shoplist",
  templateUrl: "shoplist.html",
    styleUrls: ["shoplist.scss"]
})
export class ShoplistPage implements OnInit {
  shopCategoryCode: string;
  shopListArray: Shop[];
   defaultHref = '';
  constructor(
    public shopListProvider: ShopListProvider,public alert:AlertController,public loading:LoadingController
  ) {

  }
async ngOnInit() {
   const loading =  await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
   this.shopListProvider.getShopsByCategory("sd").subscribe(async s =>
    {this.shopListArray = s;
    await loading.dismiss();
    },
    (error) =>{
       this.presentAlert();
    }
  
    );
}
  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Error Occurred',
      message: 'Please try again later.',
      buttons: ['OK']
    });

    await alert.present();
  }
   ionViewDidEnter() {
    this.defaultHref = `/app/tabs/market`;
  }
}
