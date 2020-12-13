import { Component } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { NavParams } from "@ionic/angular/directives/navigation/nav-params";
import { NavController } from "@ionic/angular/providers/nav-controller";

@Component({
  selector: "page-myorder",
  templateUrl: "order.html",
  styleUrls: ["order.scss"]
})
export class MyOrderPage {
  orders:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loader:LoadingController,private alertController:AlertController) {


  }
  history() {
    console.log("loader stopped");
  }
async  presentError() {
  let alert = await this.alertController.create({
    title: 'Error Occurred',
    message: 'Please check your internet connection or restart app.',
    buttons: [
      {
        text: 'Ok',
        handler: () => {
          console.log('Ok clicked');
          
        }
      }
    ]
  });
  await alert.present();
}
}