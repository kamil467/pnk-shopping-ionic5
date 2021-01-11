import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MyOrderPage } from "./order";
import { OrderPageRoutingModule } from "./order-routing.module";
import { OrderProvider } from "../../providers/order-provider";
import { SortByPipe } from "../../pipes/sort-order-pipe";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrderPageRoutingModule],
  declarations: [MyOrderPage,SortByPipe],
  entryComponents: [MyOrderPage],
  providers:[OrderProvider]
})
export class OrderPageModule {}
