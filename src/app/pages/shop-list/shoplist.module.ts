import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShoplistPage } from './shoplist';
import { ShopListRoutingModule } from './shoplist-routing.module';
import { ImagepreloaderDirective, ImagePreLoaderModule } from '../../directive/imagepreloader.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopListRoutingModule,
    ImagePreLoaderModule
  ],
  declarations: [
    ShoplistPage
  ],
  entryComponents: [
    ShoplistPage
  ]
})
export class ShopListModule { }