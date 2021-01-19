import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { AlertController, MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { catchError } from 'rxjs/operators';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Schedule',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    },
    {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'people'
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private afMessaging:AngularFireMessaging,
    private alert:AlertController,
    private fcm: FCM
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
     await this.presentAppExitAlert();
    });
    this.checkLoginStatus();
    this.listenForLoginEvents();    
    
    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then( () => {

   // firebase push notification

   this.fcm.onNotification().subscribe(async data => {
    if (data.wasTapped) {
      console.log("Received in background");
    } else {
      console.log("Received in foreground");
      // display toast
      const notificationToast = await this.toastCtrl.create({
        message:(<any>data).body,
        position: 'top',
        buttons: [
          {
            role: 'cancel',
            text: 'Ignore'
          }
        ]
      });
    await notificationToast.present();
    };
  });

  this.fcm.onTokenRefresh().subscribe(token => {
    // Register your new token in your back-end if you want
    // backend.registerToken(token);
  });
  //End- firebase push notification

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.requestPushNotificationPermission // request push notification permission  This won't display if user doesn't subscribe it

    });
  }

  // firebase specific push notification codes
  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }
  getToken() {
    this.fcm.getToken().then(async token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
     await  this.presentTestAlert(token);
     
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }

// firebase push notifications

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/schedule');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }

  requestPushNotificationPermission()
  {
    // USER-REQUESTED-TOKEN
        this.afMessaging.getToken.subscribe(async result =>{

          if(result)
          {
            console.log("Token is:"+result);
          }
          else{
            // request the user permission for granting the token.
           
             this.requestUserPermission();
          }
         
        },
        error =>{
          console.error(error);
        }
        );    
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

async presentAppExitAlert()
{
  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    header: 'Exit App!',
    message: '<strong>Do you want to exit from pnkshop?</strong>',
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
         // do nothing.
         navigator['app'].exitApp();  // exit from app.
        }
      }
    ]
  });

  await alert.present();
}

async presentTestAlert(data:any)
{
  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    header: 'Test Data',
    message: data,
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
         // do nothing.
 
        }
      }
    ]
  });

  await alert.present();
}



}
