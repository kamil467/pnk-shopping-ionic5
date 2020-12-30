import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Observable, of, Subscription } from 'rxjs';
import { first, take } from 'rxjs/operators';
import { Customer } from '../../interfaces/account-interface';
import { AccountProvider } from '../../providers/account-provider';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.page.html',
  styleUrls: ['./phone-login.page.scss'],
})
export class PhoneLoginPage  {

  isSuccess:boolean  = false;
  customerCreationObservableSubsc:Subscription;
  user:Observable<any>;
  isLoggedIn:boolean = false;
  userLoggedSubscription:Subscription;
  customerObj :Observable<Customer>;
  tobeUpdatedCustomerObj:Customer

  constructor(public angularFireAuth: AngularFireAuth,
    private accountProvider:AccountProvider,
    private alertController:AlertController) { }

 ngOnDestroy()
 {
   /**It is important to unsubscribe subscribtion if not using async pipe. */
 this.customerCreationObservableSubsc.unsubscribe();
 this.userLoggedSubscription.unsubscribe();
 }
 ionViewWillEnter()
 {
   this.getLoggedInUser();
 }
 
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
  console.log("successCallback called");
  this.isSuccess = true;
  const phoneNumber = signInSuccessData.authResult.user.phoneNumber;
  console.log("Phone number is:"+phoneNumber);
  // check for new user in customer collection.
  // if (newuser)
  // create a customer document with userId from auth obj.
  // prompt the user to fill account details such as (name, landmark, address, alternative contact no amnd pincode.)
  // if not a new user - make the form as readonly and display edit button
  this.customerCreationObservableSubsc = this.accountProvider.getCustomer(phoneNumber).pipe(take(1)).subscribe(result =>
    {
      if(result == null) // no user data found for given phonenumber.
      {
        console.log("Customer not found");
        const customer:Customer = 
        {
          customerId:null,
          address:null,
          alternativeContact:null,
          landmark:null,
          name:null,
          phoneNumber:phoneNumber,
          postCode:null

        }
        this.accountProvider.createCustomer(customer).then((result)=>{
          // user has been created successfully
                if(result.customerId != undefined)
                {
                  console.log("User Id is :"+result.customerId);
                  this.customerObj = of(result as Customer);
                }
        },
        ).catch(
          async error => {
            console.error("error occurred while creating the user"+error);
            await this.presentErrorAlert();
          }
        );
      }
      else{
        console.log("user record already present");
        this.customerObj = of(result);
      }
    },
    async error => {
      console.error("error occurred while sigining the user"+error);
      await this.presentErrorAlert();
    }
    );

    // display success message on completion of observable and display  pop for error 
    this.getLoggedInUser();
}
 
  async errorCallback(errorData: FirebaseUISignInFailure) {
  console.error("error occurred while sigining the user"+errorData);
      await this.presentErrorAlert();
  //display popup alert
}
 
uiShownCallback() {
  console.log("uiShownCallback called");
}
editDetails()
{
 // build tobeUpdatedCustomerObj.
 

}

getLoggedInUser()
{
 this.userLoggedSubscription = this.angularFireAuth.authState.pipe(first()).subscribe(user =>
  {
    if(user)
    {
      this.isLoggedIn = true;
      this.customerObj = this.accountProvider.getCustomer(user.phoneNumber);
    }
    else{
      this.isLoggedIn = false;
    }
  },
  async error => {
    console.error("error occurred while getting authState"+error);
    await this.presentErrorAlert();
  }
  );

}

async logOutButtonClicked()
{
 await this.presentLogOutConfirm();
}

logOut()
{
  // show pop up alert for prompting the user to select 
 this.angularFireAuth.signOut().then(() =>
 {
   console.log("successfully loggedout");
   this.getLoggedInUser();
 }).catch(async (err)=>
 {
   console.error("Error occurred while signing out the user."+err);
   await this.presentErrorAlert();
   // show pop alert here.
 });
}
async presentLogOutConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: '<strong>LogOut</strong>!!!',
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
        handler: () => {
          this.logOut();
        }
      }
    ]
  });

  await alert.present();
}

async presentErrorAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Error occurred',
    message: 'Please try again later.',
    buttons: ['OK']
  });

  await alert.present();
}
}
