import { Component, OnInit } from "@angular/core";
import { AlertController, NavController, NavParams } from "@ionic/angular";
import { Observable } from "rxjs";
import { BasketObj, OrderItem } from "../../interfaces/basket-interface";
import { BasketProvider } from "../../providers/basket-provider";


@Component({
  selector: "page-basket",
  templateUrl: "basket.html",
  styleUrls: ["basket.scss"]
})
export class BasketPage   implements OnInit {
  showOrderNowButton:boolean = true;
  basketItems: Observable<BasketObj>;
  storecode: string;
  basketTotalAmount: number = 0;
public navParams = new NavParams();
  constructor(
    public navCtrl: NavController,
    public basketProvider: BasketProvider,public alert:AlertController
  ) {
   
  }

  ngOnInit(){
  this.basketItems  = this.basketProvider.getBasketForOrder();  // load basket Items
  this.updateTotal();
  }



  addQuantity(item: OrderItem) {
    console.log("Item id is:" + item.productId);
    this.basketProvider.addItemToBasketOverload(item);
    this.updateTotal();
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
    this.updateTotal();
  }

  removeEntireProduct(item:OrderItem)
  {
     this.basketProvider.emptyProductAllQuantity(item);
     this.updateTotal();
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

   backButton()
   {
     this.navCtrl.pop();
   }
updateTotal()
{
  this.basketProvider.getBasketForOrder().subscribe(result=>{
    this.basketTotalAmount =  this.caluclateTotalAmount(result.items);    // perform total
    });
}

}
