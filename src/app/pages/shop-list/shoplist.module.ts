import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShoplistPage } from './shoplist';
import { ShopListRoutingModule } from './shoplist-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopListRoutingModule
  ],
  declarations: [
    ShoplistPage
  ],
  entryComponents: [
    ShoplistPage
  ]
})
export class ShopListModule { }