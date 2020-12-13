import { NgModule } from '@angular/core';
import {RouterModule,  Routes } from '@angular/router';
import { MyOrderPage } from './order';



const routes:Routes=[
  {
  path:'',
  component:MyOrderPage
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class OrderPageRoutingModule { }