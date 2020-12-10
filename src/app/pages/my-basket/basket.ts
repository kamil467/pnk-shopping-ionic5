import { Component } from "@angular/core";
import { AlertController, NavController, NavParams } from "@ionic/angular";
import { BasketObj, OrderItem } from "../../interfaces/basket-interface";
import { BasketProvider } from "../../providers/basket-provider";


@Component({
  selector: "page-basket",
  templateUrl: "basket.html",
  styleUrls: ["basket.scss"]
})
export class BasketPage {
  basketItems: BasketObj;
  storecode: string;
  basketTotalAmount: number = 0;
public navParams = new NavParams();
  constructor(
    public navCtrl: NavController,
    public basketProvider: BasketProvider,public alert:AlertController
  ) {
   // this.storecode = this.navParams.get("storecode");
    this.basketProvider
      .getBasketObj("storecode")
      .subscribe(b => (this.basketItems = b));

    if (this.basketItems.items != undefined) {
      this.basketTotalAmount = this.caluclateTotalAmount(
        this.basketItems.items
      );
    }
  }
  addQuantity(item: OrderItem) {
    console.log("Item id is:" + item.productId);
    this.basketProvider.addItemToBasketOverload(item);
    this.basketTotalAmount = this.caluclateTotalAmount(this.basketItems.items);
  }

  caluclateTotalAmount(items: OrderItem[]): number {
    let totalAmount = 0;
    items.forEach(i => {
      totalAmount = totalAmount + i.totalPrice;
    });
    return totalAmount;
  }
  removeQuantity(item: OrderItem) {
    this.basketProvider.removeItemFromBasket(item);
    this.basketTotalAmount = this.caluclateTotalAmount(this.basketItems.items);
  }

  removeEntireProduct(item:OrderItem)
  {
     this.basketProvider.emptyProductAllQuantity(item);
    this.basketTotalAmount = this.caluclateTotalAmount(this.basketItems.items);
  }

  emptyWholeBasket()
  {
    this.basketProvider.emptyBasket();
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
