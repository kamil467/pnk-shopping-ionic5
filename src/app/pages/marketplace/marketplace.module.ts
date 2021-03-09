import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MarketplacePage} from './marketplace'
import { MarketplaceRoutingModule } from './marketplace-routing.module';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketplaceRoutingModule,
    MatRippleModule
  ],
  declarations: [
    MarketplacePage
  ],
  entryComponents: [
    MarketplacePage
  ]
})
export class MarketplaceModule { }