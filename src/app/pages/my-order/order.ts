import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AlertController, LoadingController } from "@ionic/angular";
import { Observable } from "rxjs";
import { concatMap, finalize, first, map, shareReplay } from "rxjs/operators";
import { OrderSummaryToBeDisplayed } from "../../interfaces/order-interface";
import { AccountProvider } from "../../providers/account-provider";
import { AppService } from "../../providers/app.service";
import { OrderProvider } from "../../providers/order-provider";


@Component({
  selector: "page-myorder",
  templateUrl: "order.html",
  styleUrls: ["order.scss"]
})
export class MyOrderPage implements OnInit{
  orders:any;
  orderSummaryToBeDisplayed:Observable<OrderSummaryToBeDisplayed[]>
  isLoggedInUser:boolean;
  segmentValue:string;
  today:string;
  ngOnINtLoadCount : number= 0;
  isRecentOrdersAvailable:boolean
  isHistoryOrdersAvailable:boolean;
  public loading$ = this.appService.loading.asObservable();

  constructor(private loader:LoadingController,private alertController:AlertController,
    private orderProvider:OrderProvider,
    public angularFireAuth:AngularFireAuth,
    public accountProvider:AccountProvider,
    public appService:AppService) {


  }

ngOnInit()
{

  const now = new Date;
this.today =now.toISOString();

  this.segmentValue = "recent";
  console.log("ngOnInit called");
  // load recent orders.
  // load today's date orders.
  // call customer api to get id of the customer
  this.getSummaryList(this.segmentValue);
  this.ngOnINtLoadCount = 1;

}

segmentChanged(event:any)
{
  
  this.segmentValue = event.detail.value;

  this.getSummaryList(this.segmentValue);



}
ionViewWillEnter()
{

  this.appService.isLoading(true);
  this.angularFireAuth.authState.pipe(first(), finalize(()=> this.appService.isLoading(false)),shareReplay()).subscribe((result)=>{
    if(result)
    {
      this.isLoggedInUser = true;
    }
    else{
      this.isLoggedInUser = false;
    }

  })

}

getSummaryList(segmentValue:string)
{
  this.orderSummaryToBeDisplayed = this.angularFireAuth.authState.pipe(first(),
  concatMap(user => 
       this.accountProvider.getCustomer(user.phoneNumber).pipe(
        concatMap(customer => this.orderProvider.getRecentOrdersByCustomerId(customer.customerId).pipe(
          map(result  => {
            
            return result.map( x =>{
            const dateTimeNow = new Date();
            const orderCreationDate = formatDate(x.orderSummary.creationTime.toDate(), 'dd-MM-yyyy' ,'en-US');
            const nowDateFormat = formatDate(dateTimeNow,'dd-MM-yyyy','en-us');
            if(segmentValue =='recent'){
             if(orderCreationDate == nowDateFormat)
             {
               this.isRecentOrdersAvailable = true;
               return x;
             }
            }
            else if(segmentValue =='history')
            {
              if(orderCreationDate != nowDateFormat)
             {
              this.isHistoryOrdersAvailable = true;
               return x;
             }
            }
            
            })
          })
        ))
       )));
}


}