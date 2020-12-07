import { NgModule } from '@angular/core';
import {RouterModule,  Routes } from '@angular/router';
import { CategoryListPage } from './category';


const routes:Routes=[
  {
  path:'',
  component:CategoryListPage
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class CategoryRoutingModule { }