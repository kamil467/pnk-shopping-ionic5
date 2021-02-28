import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ProductListPage } from "./product-list";
import { ProductListRoutingModule } from "./product-list-routing.module";
import { ImagePreLoaderModule } from "../../directive/imagepreloader.directive";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule,ProductListRoutingModule,ImagePreLoaderModule],
  declarations: [ProductListPage],
  entryComponents: [ProductListPage]
})
export class ProductListModule {}
