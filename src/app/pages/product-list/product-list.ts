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
ngOnInit(): void {
throw new Error("Method not implemented.");
}
}