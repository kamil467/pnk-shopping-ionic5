import { NgModule } from '@angular/core';
import {RouterModule,  Routes } from '@angular/router';
import { ShoplistPage } from './shoplist';

const routes:Routes=[
  {
  path:'',
  component:ShoplistPage
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class ShopListRoutingModule { }