import { StoreServiceArea } from "./shop-list";


export interface BasketObj {
  items: Array<OrderItem>;
  storeName: string;
  storeCode: string;
  serviceArea: StoreServiceArea[];
}

export interface OrderItem {
  orderItemId:string,
  name: string;
  quantity: number;
  productImageUrl: string;
  pricePerQuantity: number;
  totalPrice: number;
  productId: string;
}

export interface BasketFooterObj {
  totalItemCount: number;
  totalBasket: number;
  storecode: string;
}
