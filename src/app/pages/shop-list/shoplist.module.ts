import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShoplistPage } from './shoplist';
import { ShopListRoutingModule } from './shoplist-routing.module';
import { ImagepreloaderDirective, ImagePreLoaderModule } from '../../directive/imagepreloader.directive';
import { IonMediaCacheModule } from 'ion-media-cache';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopListRoutingModule,
    ImagePreLoaderModule,
    IonMediaCacheModule,
    MatRippleModule,
    MatProgressBarModule

  ],
  declarations: [
    ShoplistPage
  ],
  providers:[File,
    WebView],
  entryComponents: [
    ShoplistPage
  ]
})
export class ShopListModule { }