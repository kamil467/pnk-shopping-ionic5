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
 // lastUpdatedTimeStamp: Date;
  orderStage: string;
  customerDeliveryInfoId:string
}
export interface OrderSummaryToBeDisplayed {
  orderSummary: OrderSummary;
  orderItems: OrderItem[];
  customerDeliveryInfo:CustomerDeliveryPersonalInfo
}

export interface ExpandableObject
{
  expanded:boolean,
  orderSummary:OrderSummaryToBeDisplayed,
}

export interface CustomerDeliveryPersonalInfo
{
  id:string,
  orderSummaryId:string,
  deliveryLocation:string,
  landmark:string,
  contactNo:string
}