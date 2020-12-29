import { OrderItem } from "./basket-interface";

export interface OrderSummary {
  id: string;  // from firebase
  shopName: string;  // from basket
  storeCode: number;    // from basket
  customerId: string; //fromauthenticated user
  totalOrderValue: number;   // from basket + delivery charge
  totalItems: number;   // from basket
  additionalRequest: string;   // from basket
  status: string;  // from firebase  -- levels:Placed/Prepared/Delivered/Cancelled/Not Delivered
  reason: string;  // from firebase
  lastUpdatedTimeStamp: Date;
  deliveryCharge:number;
}
export interface OrderSummaryToBeDisplayed {
  orderSummary: OrderSummary;   // doc type
  orderItems: OrderItem[];  // sub collection under orderSummary document
  customerDeliveryInfo:CustomerDeliveryPersonalInfo  // sub collection under order Summary
}

export interface ExpandableObject
{
  expanded:boolean,
  orderSummary:OrderSummaryToBeDisplayed,
}

//  should fetched from account during order processing.
export interface CustomerDeliveryPersonalInfo
{
  id:string,
  deliveryLocation:string,
  landmark:string,
  contactNo:string,
  pincode:number
}

