import { Component } from "@angular/core";
//import { ShoplistPage } from "../shoplist/shoplist";
/**
 * Generated class for the MarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: "page-marketplace",
  templateUrl: "marketplace.html",
  styleUrls: ["./marketplace.scss"]
})
export class MarketplacePage {


  cardClicked(storeCategory: string) {
    // navigate to shoplist page with super market parameter.
   // this.navCtrl.push(ShoplistPage, { category: storeCategory });
  }
}
