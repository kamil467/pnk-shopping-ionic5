import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ProductListPage } from "./product-list";
import { ProductListRoutingModule } from "./product-list-routing.module";
import { ImagePreLoaderModule } from "../../directive/imagepreloader.directive";
import { IonMediaCacheModule } from 'ion-media-cache';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule,ProductListRoutingModule,ImagePreLoaderModule,MatIconModule,MatBadgeModule,
    IonMediaCacheModule,MatRippleModule,MatProgressBarModule],
  declarations: [ProductListPage],
  providers:[File,
    WebView],
  entryComponents: [ProductListPage]
})
export class ProductListModule {}
