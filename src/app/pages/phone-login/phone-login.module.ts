import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneLoginPageRoutingModule } from './phone-login-routing.module';

import { PhoneLoginPage } from './phone-login.page';
import {firebase, FirebaseUIModule,firebaseui} from 'firebaseui-angular';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [

    {
      provider:firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry:'IN',
      defaultNationalNumber:'1234567890',
      loginHint:'+911234567890',
      whitelistedCountries:['IN','+91'],
      buttonColor:'crimson',
      
    },
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneLoginPageRoutingModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  declarations: [PhoneLoginPage]
})
export class PhoneLoginPageModule {}
