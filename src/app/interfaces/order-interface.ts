import { OrderItem } from "./basket-interface";

export interface OrderSummary {
  id: string;
  shopName: string;
  shopCode: number;
  customerId: string;
  totalOrderValue: number;
  totalItems: number;
  additionalRequest: string;
  status: string;
  reason: string;
  lastUpdatedTimeStamp: Date;
  orderStage: string;
}
export interface OrderSummaryToBeDisplayed {
  orderSummary: OrderSummary;
  orderItems: OrderItem[];
}
