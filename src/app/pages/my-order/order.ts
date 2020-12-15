import { Component } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";


@Component({
  selector: "page-myorder",
  templateUrl: "order.html",
  styleUrls: ["order.scss"]
})
export class MyOrderPage {
  orders:any;

  constructor(private loader:LoadingController,private alertController:AlertController) {


  }
  history() {
    console.log("loader stopped");
  }
async  presentError() {
 /* let alert = await this.alertController.create({
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
*/}
}