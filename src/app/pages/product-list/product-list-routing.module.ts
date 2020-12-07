import { NgModule } from '@angular/core';
import {RouterModule,  Routes } from '@angular/router';
import { ProductListPage } from './product-list';



const routes:Routes=[
  {
  path:'',
  component:ProductListPage
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class ProductListRoutingModule { }