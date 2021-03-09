import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MyOrderPage } from "./order";
import { OrderPageRoutingModule } from "./order-routing.module";
import { OrderProvider } from "../../providers/order-provider";
import { SortByPipe } from "../../pipes/sort-order-pipe";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrderPageRoutingModule,MatExpansionModule,MatFormFieldModule,MatProgressBarModule],
  declarations: [MyOrderPage,SortByPipe],
  entryComponents: [MyOrderPage],
  providers:[OrderProvider]
})
export class OrderPageModule {}
