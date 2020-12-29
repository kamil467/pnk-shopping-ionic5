import { Observable } from "rxjs";

export interface Shop{
 id:string, // This will be  the storecode
 name:string,
 location:string,
 tileImageUrl:string,
 deliverySpeed:string,
 operationHours:string,
 description:string,
 status:string,
 serviceArea:StoreServiceArea[],
 storeCode:string,
 categoryCode:string,
 shopContactNumber1:number,
 shopContactNumber2:number,
 deliveryOrderConfig:DeliveryOrderConfig
}

export interface StoreServiceArea {

    id:string,
    cityName:string,
    pincode:number,
    storecode:string,

}

export interface DeliveryOrderConfig
{
    id:string,
    deliveryCharge:number,
    minimumOrderValue:number,
    maximumOrderValue:number,
    maximumQuantity:number,
}
