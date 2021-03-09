import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryListPage } from './category';
import { CategoryRoutingModule } from './category-routing.module';
import { ImagePreLoaderModule } from '../../directive/imagepreloader.directive';
import { IonMediaCacheModule } from 'ion-media-cache';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryRoutingModule,
    ImagePreLoaderModule,
    IonMediaCacheModule,
    MatSliderModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBadgeModule,
    MatIconModule
  ],
  declarations: [
    CategoryListPage
  ],
  providers:[File,
    WebView],
  entryComponents: [
    CategoryListPage
  ]
})
export class CategoryModule { }