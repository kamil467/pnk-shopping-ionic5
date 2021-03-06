import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { ActivatedRoute,Router } from "@angular/router";
import { Network } from "@ionic-native/network/ngx";
import { AlertController, LoadingController, NavController, NavParams, Platform, ToastController } from "@ionic/angular";
import { Observable, Subscriber, Subscription } from "rxjs";
import { catchError, concatMap, finalize, first, map, shareReplay } from "rxjs/operators";
import { BasketObj, OrderItem } from "../../interfaces/basket-interface";
import { AccountProvider } from "../../providers/account-provider";
import { AppService } from "../../providers/app.service";
import { BasketProvider } from "../../providers/basket-provider";
import { OrderProvider } from "../../providers/order-provider";



@Component({
  selector: "page-basket",
  templateUrl: "basket.html",
  styleUrls: ["basket.scss"]
})
export class BasketPage   implements OnInit {
  showOrderNowButton:boolean = true;
  basketItems: BasketObj;
  storecode: string;
  basketTotalAmount: number = 0;
  userLoggedSubscription:Subscription;
  isLoggedIn:boolean= false;
  isServiceAvailable:string="false";
  orderRef:Subscription;
  serviceRed:Subscription;
  public loading$ = this.appService.loading.asObservable();   // get the subject value.
  networkSubscription:Subscription;
  isCheckOutAllowedByShopHours:boolean; // enable-disable checkout button by shop hours.
public navParams = new NavParams();
  constructor(
    public navCtrl: NavController,
    public basketProvider: BasketProvider,public alert:AlertController,
   public angularFireAuth: AngularFireAuth,
   public accountProvider:AccountProvider,
   private orderProvider:OrderProvider,
   public appService:AppService,
   public toastController: ToastController,
   public activatedRoute:ActivatedRoute,
   public router:Router,
   public platform:Platform,public loadingController:LoadingController,private network:Network
  ) {
  }

  ngOnInit(){
    this.platform.backButton.subscribeWithPriority(10, async () => {
      this.navCtrl.pop();
       });
  this.basketItems  = this.basketProvider.getBasketDirect();  // load basket Items
  this.updateTotal();

  }
  ionViewWillEnter()
  {
    this.getLoggedInUser();
    
    if(this.basketItems.shopType == 'fdrst'){
    this.isCheckOutAllowedByShopHours = this.basketProvider.checkShopAvailability(this.basketItems.operationalHours);
    }
    else{
      this.isCheckOutAllowedByShopHours = true;
    }
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

  const updatedBasket = this.basketProvider.getBasketDirect();
  this.basketTotalAmount =  this.caluclateTotalAmount(updatedBasket.items); 

}
getLoggedInUser()
{
 this.userLoggedSubscription = this.angularFireAuth.authState.pipe(first()).subscribe(user =>
  {
    if(user)
    {
      this.isLoggedIn = true;

    this.serviceRed =  this.accountProvider.getCustomer(user.phoneNumber)
    .pipe(first()).subscribe(customer =>{
      const updatedBasket = this.basketProvider.getBasketDirect();
       updatedBasket.serviceArea.forEach(serviceArea =>{
                  if(serviceArea.pincode==customer.postCode)
                  {
                 this.isServiceAvailable = "true";
                    return;
                  }
                                  
    })
    });
      // check for shop service area pincode and customer location pin code.
       
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
  if( this.userLoggedSubscription != undefined){
   // this.userLoggedSubscription.unsubscribe();
  }
 if(  this.orderRef != undefined)
 {
  //this.orderRef.unsubscribe();
 }
 if(this.networkSubscription != undefined)
 {
   this.networkSubscription.unsubscribe();
 }
 //this.serviceRed.unsubscribe();
}

async presentConfirmOrderAlert() {
  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    header: 'Order Confirmation!',
    message: '<strong>Would you like to place the order?</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
         // do nothing.
        }
      }, {
        text: 'Okay',
        handler: async () => {
          // create order.
         await this.createOrder();
        }
      }
    ]
  });

  await alert.present();
}
async createOrderButtonClicked()
{
 await this.presentConfirmOrderAlert();
}

async createOrder()
{
if(this.networkWatch()){
  const getBasketDirect = this.basketProvider.getBasketDirect();
  const createOrderRef = this.angularFireAuth.authState.pipe(first(),
  concatMap(user => 
    this.accountProvider.getCustomer(user.phoneNumber)
    .pipe(first())));
    
    const processingOrder = await this.loadingController.create({
      spinner: "bubbles",
      message: 'Placing your order please kindly wait.....',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await processingOrder.present();

this.orderRef= createOrderRef.subscribe(customer =>{
      this.orderProvider.placeOrder(getBasketDirect,customer).then(async result  =>
        {
          console.log("Order success:"+result);
          // dismiss it here
         await processingOrder.dismiss();
         await this.presentCustomerOrderSuccessToast();
          // navigate to order page.
          this.navCtrl.navigateRoot('/app/tabs/market').then(()=>{
            this.router.navigate(['/app/tabs/myorder']);
          })
        }).catch(async error =>{
           await  processingOrder.dismiss();
            console.error("Order failed");
            await this.presentAlert("Order failed.","createOrder");
            }
      
        )
    });
    
}
else
{
  await this.presentAlert("Please kindly check your internet connection","Network failure");
}
                            
}


async presentCustomerOrderSuccessToast() {
  const toast = await this.toastController.create({
    message: 'Your order has been successfully placed.',
    duration: 2000,
    position:'top',
    color:"success"
  });
  toast.present();
}

 networkWatch():boolean
{

  if(this.network.type === 'none')
  {
    return false;
  }
  return true;
}

}
