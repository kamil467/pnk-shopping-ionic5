import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Observable } from "rxjs";
import { Product } from "../../interfaces/product-category";
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
constructor(public productListProvider:ProductListProvider,
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
    await this.presentAlert();
  }
  )
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
}