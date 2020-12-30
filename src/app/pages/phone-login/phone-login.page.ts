import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Customer } from '../../interfaces/account-interface';
import { AccountProvider } from '../../providers/account-provider';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.page.html',
  styleUrls: ['./phone-login.page.scss'],
})
export class PhoneLoginPage implements OnInit {

  isSuccess:boolean  = false;
  customerCreationObservableSubsc:Subscription;
  
  constructor(public angularFireAuth: AngularFireAuth,private accountProvider:AccountProvider) { }

  ngOnInit() {
    const phoneNumber ="+918884081427";

    // avoid memory leak problem make sure subscribtion unsubscribe after it is done.
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
                  }
          });
        }
        else{
          console.log("user record already present");
        }
      });





  }

 ngOnDestroy()
 {
   /**It is important to unsubscribe subscribtion if not using async pipe. */
 this.customerCreationObservableSubsc.unsubscribe();
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
  

}
 
errorCallback(errorData: FirebaseUISignInFailure) {
  console.log("errorCallback called");
}
 
uiShownCallback() {
  console.log("uiShownCallback called");
}
}
