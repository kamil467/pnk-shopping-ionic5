import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
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
  formSettingSubscription:Subscription;
  tempObj:Customer;



  accountInfoForm:FormGroup;
  //buttons
  showEdit:boolean= true;
  showUpdate:boolean=false;

  constructor(public angularFireAuth: AngularFireAuth,
    private accountProvider:AccountProvider,
    private alertController:AlertController,
    public formBuilder: FormBuilder,
    public toastController: ToastController
    ) { }

 ngOnInit()
 {

this.accountInfoForm = this.formBuilder.group(
  {
     name:[{value:'',disabled:true},Validators.required],
     address:[{value:'',disabled:true},Validators.required],
     phoneNumber:[{value:'',disabled:true}],
    alternativeContact:[{value:'',disabled:true},Validators.required],
    landmark:[{value:'',disabled:true},Validators.required],
    postCode:[{value:'',disabled:true},Validators.required],
    customerId:[{value:''}]
  }
);
 }



 ngOnDestroy()
 {
   /**It is important to unsubscribe subscribtion if not using async pipe. */
 this.customerCreationObservableSubsc.unsubscribe();
 this.userLoggedSubscription.unsubscribe();
 this.formSettingSubscription.unsubscribe();
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
                  this.tempObj = (result as Customer);
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
 this.accountInfoForm.enable();
 this.accountInfoForm.controls['phoneNumber'].disable();

}

getLoggedInUser()
{
 this.userLoggedSubscription = this.angularFireAuth.authState.pipe(first()).subscribe(user =>
  {
    if(user)
    {
      this.isLoggedIn = true;
    this.formSettingSubscription = this.accountProvider.getCustomer(user.phoneNumber).subscribe(customer =>{
      this.tempObj = customer;
      this.accountInfoForm.setValue({
      name:customer.name,
      address:customer.address,
      phoneNumber:customer.phoneNumber,
      alternativeContact:customer.alternativeContact,
      landmark:customer.landmark,
      postCode:customer.postCode,
      customerId:customer.customerId,
      })
     });
     //formSettingSubscription.unsubscribe();
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

submit(formValue)
{
  // build customer Obj.
    
  const updatedCustomerObj:Customer = 
  {
   name:this.accountInfoForm.controls['name'].value,
   alternativeContact:this.accountInfoForm.controls['alternativeContact'].value,
   landmark:this.accountInfoForm.controls['landmark'].value,
   address: this.accountInfoForm.controls['address'].value,
   customerId: this.accountInfoForm.controls['customerId'].value,
   postCode: this.accountInfoForm.controls['postCode'].value,
   phoneNumber: this.accountInfoForm.controls['phoneNumber'].value,
  }
   this.accountProvider.updateCustomer(updatedCustomerObj).then(async (result)=>{
     if(result){
     await this.presentCustomerDataUpdateToast();
     // disable form
     this.accountInfoForm.disable();
     this.showEdit= true;
     this.showUpdate= false;
     this.tempObj = updatedCustomerObj;
     }
     else{
      this.presentErrorAlert();
     }
     // display edit button
     // hide update and cancel button
   })
   .catch(err => {
     console.error(err);
     this.presentErrorAlert();
   })
  // call the api to update the document.

}

async presentCustomerDataUpdateToast() {
  const toast = await this.toastController.create({
    message: 'Your account information have been saved.',
    duration: 2000,
    position:'top',
    color:"success"
  });
  toast.present();
}
cancel()
{
  this.accountInfoForm.disable();
  this.accountInfoForm.setValue({
    name:this.tempObj.name,
    address:this.tempObj.address,
    phoneNumber:this.tempObj.phoneNumber,
    alternativeContact:this.tempObj.alternativeContact,
    landmark:this.tempObj.landmark,
    postCode:this.tempObj.postCode,
    customerId:this.tempObj.customerId,
    })
}
}
