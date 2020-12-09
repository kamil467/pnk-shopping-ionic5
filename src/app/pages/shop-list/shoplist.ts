import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
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
    public shopListProvider: ShopListProvider,public alert:AlertController
  ) {

  }
ngOnInit(): void {
   this.shopListProvider.getShopsByCategory("sd").subscribe(s =>
    {this.shopListArray = s},
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
