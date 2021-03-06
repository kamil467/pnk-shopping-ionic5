import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment, firebaseConfig } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire'; 
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { Network } from '@ionic-native/network/ngx';
import { ImagepreloaderDirective } from './directive/imagepreloader.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),  // enable offline support in future releases.
    HttpClientJsonpModule,
    AngularFireMessagingModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('combined-sw.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar,FCM,Network],
  bootstrap: [AppComponent]
})
export class AppModule {}
