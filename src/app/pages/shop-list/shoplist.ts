import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { from, merge, Observable, throwError } from "rxjs";
import { catchError, concatMap, concatMapTo, map, mergeMap, switchMap, toArray } from "rxjs/operators";
import { Shop, Shop1, StoreServiceArea } from "../../interfaces/shop-list";
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

  shopListObservable:Observable<Shop[]>

   defaultHref = '';
  constructor(
    public shopListProvider: ShopListProvider,
    public alert:AlertController,
    public loading:LoadingController, 
    private route: ActivatedRoute
  ) {

  }
async ngOnInit() {

  // firebase code
  const categoryCode = this.route.snapshot.paramMap.get('categoryCode'); //get the shop catgeory code from params
 this.shopListObservable =  this.shopListProvider.getActiveShopsByCategoryFirebase(categoryCode);
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
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error("Error occurred:"+error);
        
    }
}
}