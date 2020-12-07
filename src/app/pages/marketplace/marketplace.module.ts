import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MarketplacePage} from './marketplace'
import { MarketplaceRoutingModule } from './marketplace-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketplaceRoutingModule
  ],
  declarations: [
    MarketplacePage
  ],
  entryComponents: [
    MarketplacePage
  ]
})
export class MarketplaceModule { }