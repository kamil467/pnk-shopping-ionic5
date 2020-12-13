import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MyOrderPage } from "./order";
import { OrderPageRoutingModule } from "./order-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrderPageRoutingModule],
  declarations: [MyOrderPage],
  entryComponents: [MyOrderPage]
})
export class OrderPageModule {}
