import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Observable, of, Subscription } from 'rxjs';
import { delay, finalize, first, shareReplay, take } from 'rxjs/operators';
import { Customer } from '../../interfaces/account-interface';
import { AccountProvider } from '../../providers/account-provider';
import { AppService } from '../../providers/app.service';

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
  tobeUpdatedCustomerObj:Customer
  formSettingSubscription:Subscription;
  tempObj:Customer;
  public loading$ = this.appService.loading.asObservable();   // get the subject value.


  accountInfoForm:FormGroup;
  //buttons
  showEdit:boolean= true;
  showUpdate:boolean=false;

  constructor(public angularFireAuth: AngularFireAuth,
    private accountProvider:AccountProvider,
    private alertController:AlertController,
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    public appService:AppService,
    public afMessaging:AngularFireMessaging
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
  this.customerCreationObservableSubsc = this.accountProvider.getCustomer(phoneNumber).pipe(take(1)).pipe((finalize(()=>this.appService.isLoading(false)),shareReplay()),)
  .subscribe(result =>
    {
      if(result == null) // no user data found for given phonenumber.
      {
        console.log("Customer not found");
        const customer:Customer = 
        {
          customerId:'',
          address:'',
          alternativeContact:'',
          landmark:'',
          name:'',
          phoneNumber:phoneNumber,
          postCode:null

        }
        this.accountProvider.createCustomer(customer).then((result)=>{
          // user has been created successfully
                if(result.customerId != undefined)
                {
                  console.log("User Id is :"+result.customerId);
                  this.tempObj = (result as Customer);
                  this.accountInfoForm.setValue({
                    name: result.name,
                    address:result.address,
                    phoneNumber:result.phoneNumber,
                    alternativeContact:result.alternativeContact,
                    landmark:result.landmark,
                    postCode:result.postCode,
                    customerId:result.customerId,
                    })
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
        this.accountInfoForm.setValue({
          name:result.name,
          address:result.address,
          phoneNumber:result.phoneNumber,
          alternativeContact:result.alternativeContact,
          landmark:result.landmark,
          postCode:result.postCode,
          customerId:result.customerId,
          })
      }
this.isLoggedIn = true;
    },
    async error => {
      console.error("error occurred while sigining the user"+error);
      await this.presentErrorAlert();
    }
    );
}
 
  async errorCallback(errorData: FirebaseUISignInFailure) {
  console.error("error occurred while sigining the user"+errorData);
      await this.presentErrorAlert();
  //display popup alert
}
 
uiShownCallback() {
  this.isLoggedIn = false;
}
editDetails()
{
 // build tobeUpdatedCustomerObj.
 this.accountInfoForm.enable();
 this.accountInfoForm.controls['phoneNumber'].disable();

}

getLoggedInUser()
{
 this.userLoggedSubscription = this.angularFireAuth.authState.pipe(first(),finalize(()=> this.appService.isLoading(false)),shareReplay()).subscribe(user =>
  {
    if(user)
    {
      this.isLoggedIn = true;
    this.formSettingSubscription = this.accountProvider.getCustomer(user.phoneNumber).pipe(first()).subscribe(customer =>{
      if(customer != null){
      this.tempObj = customer;
      console.log(customer);
      this.accountInfoForm.setValue({
      name:customer?.name,
      address:customer?.address,
      phoneNumber:customer?.phoneNumber,
      alternativeContact:customer?.alternativeContact,
      landmark:customer?.landmark,
      postCode:customer?.postCode,
      customerId:customer?.customerId,
      })
    }
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
  this.appService.isLoading(true);  // show loader
 this.angularFireAuth.signOut().then(() =>
 {
   console.log("successfully loggedout");
   this.appService.isLoading(false);  // hide loader
   this.getLoggedInUser();
 }).catch(async (err)=>
 {
  this.appService.isLoading(false);  // hide loader
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

// spinner perfectly working and tested.
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
  // show loader 
  this.appService.isLoading(true);  // show loader
   this.accountProvider.updateCustomer(updatedCustomerObj).then( async (result)=> 
     {
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
     this.appService.isLoading(false);  // hide loader
     // display edit button
     // hide update and cancel button
   }).catch(err => {
     console.error(err);
     this.appService.isLoading(false);  // hide loader
     this.presentErrorAlert();
    
   });
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


async presentRequestNotificationPermissionAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Enable Notification?',
    message: 'Please grant permission for enable notification',
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
          this.requestUserPermission();
          // create order.
        // await this.createOrder();
        }
      }
    ]
  });

  await alert.present();
}


requestUserPermission()
{
  this.afMessaging.requestToken // getting tokens
      .subscribe(
        (token) => { // USER-REQUESTED-TOKEN
          console.log('Permission granted! Save to the server!', token);
          
        },
        (error) => {
          console.error(error);
        }
      );
}
}
