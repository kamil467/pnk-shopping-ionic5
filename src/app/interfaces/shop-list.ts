export interface Shop{
 id:string,
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
}

export interface StoreServiceArea {

    id:string,
    cityName:string,
    pincode:number,
    storecode:string,

}