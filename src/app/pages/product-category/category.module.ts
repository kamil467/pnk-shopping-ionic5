import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryListPage } from './category';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryRoutingModule
  ],
  declarations: [
    CategoryListPage
  ],
  entryComponents: [
    CategoryListPage
  ]
})
export class CategoryModule { }