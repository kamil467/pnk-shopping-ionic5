import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Observable } from "rxjs";
import { ProductCategory } from "../../interfaces/product-category";
import { Shop, StoreServiceArea } from "../../interfaces/shop-list";
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
  constructor(
    public categoryListProvider: CategoryListProvider,public alert:AlertController,public loadingController:LoadingController
  ) {
  
  }
async ngOnInit(){
   const loading =  await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    loading.present();
 this.categoryListProvider.getProductCategoryList("shopCode")
 .subscribe( c => {
   this.categoryList = c;
    this.rowCount = BuildGridArray(this.categoryList,3);
   loading.dismiss();
   },
  (error) =>{
    this.presentAlert();
  },
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

}
