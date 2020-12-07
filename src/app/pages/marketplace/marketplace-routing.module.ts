import { NgModule } from '@angular/core';
import {MarketplacePage} from './marketplace'
import {RouterModule,  Routes } from '@angular/router';

const routes:Routes=[
  {
  path:'',
  component:MarketplacePage
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class MarketplaceRoutingModule { }