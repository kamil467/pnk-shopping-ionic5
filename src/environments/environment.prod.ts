// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.

import * as firebase from "firebase";

// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: true,
  shopListAPI:"https://run.mocky.io/v3/178c994d-8c3d-45e6-a093-e308773c0b65",
  productCategoryListAPI:"https://run.mocky.io/v3/4069d7f0-509c-47bb-98ae-ef2654efba57",
  productListAPI:"https://run.mocky.io/v3/93fc0914-208a-4c5d-9db2-b70b5a576ea1",
  shopAPI:"https://run.mocky.io/v3/da231523-d7c7-4562-9be4-ea66bd95e82a",
  orderHistorySummaryAPI:"https://37113081-af1d-41a5-8667-b55b887516cd.mock.pstmn.io/historyordersummary",
  
 //orderHistorySummaryAPI:"https://run.mocky.io/v3/3e067097-25c1-4ba3-ba95-710e67fc9df9",
 orderedItemsAPI:"https://ebcf8759-6d7c-4206-9f2b-f4ac8750a37b.mock.pstmn.io/orderedItems",
 customerDeliveryInfoAPI:"https://9dd126a1-4426-4b8a-9977-a9dfd8bd7c69.mock.pstmn.io/deliveryLocation", // pass orderSummaryId
 
 SHOP_LIST_COLLECTION:"shop_list",
 SHOP_SERVICE_AREA:"service_area",
 PRODUCT_CATEGORY:"product_category",
 PRODUCT_LIST:"product_list",
 PRODUCT_CATEGORY_MAPPING:"product_category_product_mapping",
 DELIVERY_ORDER_CONFIG:"delivery_order_config",
 CUSTOMER_COLLECTION:"customer",
 ORDER_SUMMARY:"order_summary",
 CUSTOMER_DELIVERY_PERSONAL_INFO:"customer_delivery_personal_info",
 ORDERED_ITEMS:"ordered_items",
 NOTIFICATION:"notification",
 OFFER_ZONE:"offer_zone"


};

export const firebaseConfig ={
  apiKey: "AIzaSyCW-NoLT7fu2dS_WGsbPYrWNabEdDElcF8",
  authDomain: "pnkshop-adb8e.firebaseapp.com",
  databaseURL: "https://pnkshop-adb8e.firebaseio.com",
  projectId: "pnkshop-adb8e",
  storageBucket: "pnkshop-adb8e.appspot.com",
  messagingSenderId: "858321314978",
  appId: "1:858321314978:web:9f649c995b8a3b98ce23fb",
  measurementId: "G-Y6LVPT1C5Y"
 
};



/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CL