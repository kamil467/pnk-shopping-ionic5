import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AlertController, NavController, NavParams } from "@ionic/angular";
import { Observable, Subscription } from "rxjs";
import { first } from "rxjs/operators";
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
  userLoggedSubscription:Subscription;
  isLoggedIn:boolean= false;

public navParams = new NavParams();
  constructor(
    public navCtrl: NavController,
    public basketProvider: BasketProvider,public alert:AlertController,
   public angularFireAuth: AngularFireAuth
  ) {
   
  }

  ngOnInit(){
  this.basketItems  = this.basketProvider.getBasketForOrder();  // load basket Items
  this.updateTotal();
  }
  ionViewWillEnter()
  {
    this.getLoggedInUser();
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
getLoggedInUser()
{
 this.userLoggedSubscription = this.angularFireAuth.authState.pipe(first()).subscribe(user =>
  {
    if(user)
    {
      this.isLoggedIn = true;
      console.log("Logged in User :"+user.phoneNumber);
    }
    else{
      this.isLoggedIn = false;
      console.log("anonymous user");
    }
  });

}
ngOnDestroy()
{
  this.userLoggedSubscription.unsubscribe();
}

}
