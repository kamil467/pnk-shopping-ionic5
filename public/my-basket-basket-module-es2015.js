(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-basket-basket-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-basket/basket.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-basket/basket.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header>\r\n\t<ion-toolbar color=\"crimson\">\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-button (click)=\"backButton()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n\t  </ion-buttons>\r\n\t <ion-title>\r\n\tMy Basket\r\n\t  </ion-title>\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content class=\"basket-content\">\r\n\t<div *ngIf=\"basketItems | async as myBasket\">\r\n\t<ion-card>\r\n\t\t<ion-card-header class=\"card-header\">Cart Summary</ion-card-header>\r\n\r\n\t\t\t<ion-grid class=\"text-center\">\r\n\t\t\t\t<ion-row class=\"text-center\">\r\n\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\tPrice\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\tQty\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-2>\r\n\t\t\t\t\t\tTotal\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t<ion-col col-1>\r\n\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<hr class=\"hr-divider\" />\r\n\t\t\t\t<div *ngFor=\"let item of myBasket.items\">\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"item.productImageUrl != null; then customImage;else defaultImage\">\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-template #customImage>\r\n\t\t\t\t\t\t\t\t<img [src]=\"item.productImageUrl\" />\r\n\t\t\t  </ng-template>\r\n\t\t\t\t\t\t\t\t<ng-template #defaultImage>\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t  src=\"../../../assets/img/default.jpg\"\r\n\t\t\t\t/>\r\n\t\t\t  </ng-template>\r\n\t\t\t\t \r\n\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t{{item.name}}\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\t\t\t{{item.pricePerQuantity  | currency:'INR'}}\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-col >\r\n\t\t\t\t\t\t\t\t\t\tqty:{{item.quantity}}\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"add-circle\" style=\"margin-bottom:8px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addQuantity(item)\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"remove-circle\" (click)=\"removeQuantity(item)\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col col-2>\r\n\t\t\t\t\t\t\t\t{{item.totalPrice  | currency:'INR'}}\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col col-1>\r\n\t\t\t\t  <ion-icon name=\"trash\" (click)=\"removeEntireProduct(item)\"></ion-icon>\r\n\t\t\t\t</ion-col>\r\n\t\r\n\t\t\t\t\t</ion-row>\r\n\t\r\n\t\t\t\t\t<hr class=\"hr-divider\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col col-6>\r\n\t\t\t\t\t\tTotal\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col style=\"font-weight:Bold\">\r\n\t\t\t\t   {{basketTotalAmount | currency:'INR'}}\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col col-6>\r\n\t\t\t\t\t\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col style=\"font-weight:Bold\">\r\n\t\t\t\t         +\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col col-6>\r\n\t\t\t\t\t\tDelivery fee\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col style=\"font-weight:Bold\">\r\n\t\t\t\t\t\t\t{{myBasket.deliveryOrderConfig.deliveryCharge | currency:'INR'}}\r\n\t\t\t\t\t\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col col-6>\r\n\t\t\t\t\t\tNet Total\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col style=\"font-weight:Bold\">\r\n\t\t\t\t   {{(basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) | currency:'INR'}}\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\r\n\t\t\t</ion-grid>\r\n\r\n\t\t\r\n\r\n\r\n\t<ng-template #emptyCart>\r\n\t\tYour cart is empty. Please add product into your cart.\r\n\t</ng-template>\r\n\t</ion-card>\r\n\r\n\t<ion-card >\r\n\t\t<ion-card-header class=\"card-header\">Checkout \t<ion-icon name=\"checkmark-circle\"></ion-icon></ion-card-header>\r\n\t\t<ion-card-content>\r\n\t\t\t<div  *ngIf=\"((basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) < myBasket.deliveryOrderConfig.minimumOrderValue); let lessTrue\">\r\n\t\t\t\t<ion-chip color=\"crimson\" >\r\n\t\t\t\t\t<ion-icon name=\"close-circle\"></ion-icon>\r\n\t\t\t\t\t<ion-label>Minimum Order value : <strong> {{myBasket.deliveryOrderConfig.minimumOrderValue | currency :'INR'}} </strong></ion-label>\r\n\t\t\t\t</ion-chip>\r\n               \r\n            \r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"(myBasket.totalItemsCount > myBasket.deliveryOrderConfig.maximumQuantity) let maxQuantityTrue\">\r\n\t\t\t\t<ion-chip color=\"crimson\" >\r\n\t\t\t\t\t<ion-icon name=\"close-circle\"></ion-icon>\r\n\t\t\t\t\t<ion-label>Maximum Item Count : <strong> {{myBasket.deliveryOrderConfig.maximumQuantity }} </strong></ion-label>\r\n\t\t\t\t</ion-chip>\r\n\t\t\t   </div>\r\n\t\t\t<div *ngIf=\"((basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) > myBasket.deliveryOrderConfig.maximumOrderValue) let maxOrderTrue\">\r\n\t\t\t\t<ion-chip color=\"crimson\" >\r\n\t\t\t\t\t<ion-icon name=\"close-circle\"></ion-icon>\r\n\t\t\t\t\t<ion-label>Maximum Order value : <strong> {{myBasket.deliveryOrderConfig.maximumOrderValue | currency :'INR'}} </strong></ion-label>\r\n\t\t\t\t</ion-chip>\r\n\t\t\t</div>\r\n\t\r\n\t\t\t<div *ngIf=\"((basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) > myBasket.deliveryOrderConfig.minimumOrderValue) \r\n\t\t\t\t&& ((basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) < myBasket.deliveryOrderConfig.maximumOrderValue)\r\n\t\t\t\">\r\n\r\n\t\t    <ng-container *ngIf=\"isLoggedIn; then showOrderNow; else showLogin\">\r\n\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-template #showOrderNow>\r\n\t\t\t\t<div class=\"text-center\" *ngIf=\"showOrderNowButton\">\r\n\t\t\t\t\t<!-- check customer postal code and shop service area postal code-->\r\n\t\t\t\t\t<div *ngIf=\"isServiceAvailable | async as isAvailable ; else noService\">\r\n\t\t\t\t\t\t<ion-button class=\"order-now\" fill=\"outline\" *ngIf=\"isAvailable=='true'\" round color=\"crimson\" (click)=\"createOrderButtonClicked()\"> Order Now</ion-button>\r\n\t\t\t\t\t    <ion-card  *ngIf=\"isAvailable=='false'\">\r\n\t\t\t\t\t\t\t<ion-card-header color=\"crimson\">\r\n\t\t\t\t\t\t\t No Service  <ion-icon name=\"alert\"></ion-icon>\r\n\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t\t<ion-label><strong>Sorry this store doesn't have delivery service at your pincode. \r\n\t\t\t\t\t\t\t\t\tWe are expanding our service, soon we will cover your location.</strong> </ion-label>\r\n\t\t\t\t\t\t\t</ion-card-content>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ng-template #noService>\r\n\t\t\t\t\t\t<ion-spinner   name=\"bubbles\" >\r\n\r\n\t\t\t\t\t\t</ion-spinner>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\r\n\t\t\t   </div>\r\n\t\t\t</ng-template>\r\n\t<!--Below button should take the user to login -->\t\t\r\n\t\t<ng-template #showLogin>\r\n\t\t\t<div class=\"text-center\">\r\n\t\t\t\t<ion-button class=\"order-now\" fill=\"outline\" routerLink=\"/app/tabs/login\" round color=\"crimson\">Login to Check out </ion-button>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t\t \r\n\t</div>\r\n\t\t</ion-card-content>\r\n\t </ion-card>\r\n\t\r\n</div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/my-basket/basket-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/my-basket/basket-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: BasketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageRoutingModule", function() { return BasketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basket */ "./src/app/pages/my-basket/basket.ts");




const routes = [
    {
        path: '',
        component: _basket__WEBPACK_IMPORTED_MODULE_3__["BasketPage"]
    }
];
let BasketPageRoutingModule = class BasketPageRoutingModule {
};
BasketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BasketPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-basket/basket.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/my-basket/basket.module.ts ***!
  \**************************************************/
/*! exports provided: BasketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageModule", function() { return BasketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basket */ "./src/app/pages/my-basket/basket.ts");
/* harmony import */ var _basket_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basket-routing.module */ "./src/app/pages/my-basket/basket-routing.module.ts");







let BasketPageModule = class BasketPageModule {
};
BasketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _basket_routing_module__WEBPACK_IMPORTED_MODULE_6__["BasketPageRoutingModule"]],
        declarations: [_basket__WEBPACK_IMPORTED_MODULE_5__["BasketPage"]],
        entryComponents: [_basket__WEBPACK_IMPORTED_MODULE_5__["BasketPage"]]
    })
], BasketPageModule);



/***/ }),

/***/ "./src/app/pages/my-basket/basket.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/my-basket/basket.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basket-content {\n  background-color: crimson;\n  color: white;\n}\n\n.hr-divider {\n  border-top: 2px solid crimson;\n  width: 800px;\n}\n\n.order-now {\n  color: white;\n  font-weight: bold;\n}\n\n.text-center {\n  text-align: center;\n}\n\nion-card-header {\n  background-color: #b94545;\n  color: white;\n}\n\nion-toolbar {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktYmFza2V0L0M6XFxJb25pY1Byb2plY3RcXHBuay1zaG9wcGluZy1pb25pYzUvc3JjXFxhcHBcXHBhZ2VzXFxteS1iYXNrZXRcXGJhc2tldC5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1iYXNrZXQvYmFza2V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQztFQUVFLDZCQUFBO0VBQ0MsWUFBQTtBQ0FKOztBREVBO0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FERUE7RUFFRSxrQkFBQTtBQ0FGOztBREdBO0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFFSSxZQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1iYXNrZXQvYmFza2V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFza2V0LWNvbnRlbnRcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuIC5oci1kaXZpZGVyXHJcbiB7XHJcbiAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gfVxyXG4ub3JkZXItbm93XHJcbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGV4dC1jZW50ZXJcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0NTQ1O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5pb24tdG9vbGJhclxyXG57XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSIsIi5iYXNrZXQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhyLWRpdmlkZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgY3JpbXNvbjtcbiAgd2lkdGg6IDgwMHB4O1xufVxuXG4ub3JkZXItbm93IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0NTQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/my-basket/basket.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/my-basket/basket.ts ***!
  \*******************************************/
/*! exports provided: BasketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPage", function() { return BasketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _providers_account_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/account-provider */ "./src/app/providers/account-provider.ts");
/* harmony import */ var _providers_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/app.service */ "./src/app/providers/app.service.ts");
/* harmony import */ var _providers_basket_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/basket-provider */ "./src/app/providers/basket-provider.ts");
/* harmony import */ var _providers_order_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/order-provider */ "./src/app/providers/order-provider.ts");










let BasketPage = class BasketPage {
    constructor(navCtrl, basketProvider, alert, angularFireAuth, accountProvider, orderProvider, appService, toastController, activatedRoute, router) {
        this.navCtrl = navCtrl;
        this.basketProvider = basketProvider;
        this.alert = alert;
        this.angularFireAuth = angularFireAuth;
        this.accountProvider = accountProvider;
        this.orderProvider = orderProvider;
        this.appService = appService;
        this.toastController = toastController;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.showOrderNowButton = true;
        this.basketTotalAmount = 0;
        this.isLoggedIn = false;
        this.loading$ = this.appService.loading.asObservable(); // get the subject value.
        this.navParams = new _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]();
    }
    ngOnInit() {
        this.basketItems = this.basketProvider.getBasketForOrder(); // load basket Items
        this.updateTotal();
    }
    ionViewWillEnter() {
        this.getLoggedInUser();
    }
    addQuantity(item) {
        console.log("Item id is:" + item.productId);
        this.basketProvider.addItemToBasketOverload(item);
        this.updateTotal();
    }
    caluclateTotalAmount(items) {
        let totalAmount = 0;
        items.forEach(i => {
            totalAmount = totalAmount + i.totalPrice;
        });
        return totalAmount;
    }
    removeQuantity(item) {
        this.basketProvider.removeItemFromBasket(item);
        this.updateTotal();
    }
    removeEntireProduct(item) {
        this.basketProvider.emptyProductAllQuantity(item);
        this.updateTotal();
    }
    emptyWholeBasket() {
        this.basketProvider.emptyBasket();
    }
    presentAlert(errorMessage, componenet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Error Occurred:' + errorMessage,
                message: 'Error:' + componenet,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    backButton() {
        this.navCtrl.pop();
    }
    updateTotal() {
        this.basketProvider.getBasketForOrder().subscribe(result => {
            this.basketTotalAmount = this.caluclateTotalAmount(result.items); // perform total
        });
    }
    getLoggedInUser() {
        this.userLoggedSubscription = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(user => {
            if (user) {
                this.isLoggedIn = true;
                // check for shop service area pincode and customer location pin code.
                console.log("Logged in User :" + user.phoneNumber);
            }
            else {
                this.isLoggedIn = false;
                console.log("anonymous user");
            }
        });
        this.isServiceAvailable = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(user => this.accountProvider.getCustomer(user.phoneNumber)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(customer => this.basketProvider.getBasketForOrder().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
            let isFound = "false";
            console.log(result);
            const re = result.serviceArea.forEach(serviceArea => {
                if (serviceArea.pincode == customer.postCode) {
                    isFound = "true";
                    return;
                }
            });
            return isFound;
        }))))));
    }
    ngOnDestroy() {
        if (this.userLoggedSubscription != undefined) {
            // this.userLoggedSubscription.unsubscribe();
        }
        if (this.orderRef != undefined) {
            //this.orderRef.unsubscribe();
        }
    }
    presentConfirmOrderAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'my-custom-class',
                header: 'Order Confirmation!',
                message: '<strong>Would you like to place the order?</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            // do nothing.
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            // create order.
                            this.createOrder();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    createOrderButtonClicked() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.presentConfirmOrderAlert();
        });
    }
    createOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const createOrderRef = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(user => this.accountProvider.getCustomer(user.phoneNumber)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(customer => this.basketProvider.getBasketForOrder().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(basket => this.orderProvider.placeOrder(basket, customer)))))));
            // prsent pop
            const processingOrder = yield this.alert.create({
                cssClass: 'my-custom-class',
                header: 'Placing your order!',
                message: '<strong>Please kindly wait...!!!</strong>',
            });
            processingOrder.present();
            this.orderRef = createOrderRef.subscribe(result => {
                if (result) {
                    // order successfully placed.
                    // show toast
                    console.log("Order success:" + result);
                    // dismiss it here
                    processingOrder.dismiss();
                    this.presentCustomerOrderSuccessToast();
                    // navigate to order page.
                    this.navCtrl.navigateRoot('/app/tabs/market').then(() => {
                        this.router.navigate(['/app/tabs/myorder']);
                    });
                }
                else {
                    processingOrder.dismiss();
                    console.error("Order failed");
                    this.presentAlert("Order failed.", "createOrder");
                }
            });
        });
    }
    presentCustomerOrderSuccessToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Your order has been successfully placed.',
                duration: 2000,
                position: 'top',
                color: "success"
            });
            toast.present();
        });
    }
};
BasketPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _providers_basket_provider__WEBPACK_IMPORTED_MODULE_8__["BasketProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _providers_account_provider__WEBPACK_IMPORTED_MODULE_6__["AccountProvider"] },
    { type: _providers_order_provider__WEBPACK_IMPORTED_MODULE_9__["OrderProvider"] },
    { type: _providers_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BasketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-basket",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basket.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-basket/basket.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basket.scss */ "./src/app/pages/my-basket/basket.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _providers_basket_provider__WEBPACK_IMPORTED_MODULE_8__["BasketProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _providers_account_provider__WEBPACK_IMPORTED_MODULE_6__["AccountProvider"],
        _providers_order_provider__WEBPACK_IMPORTED_MODULE_9__["OrderProvider"],
        _providers_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], BasketPage);



/***/ })

}]);
//# sourceMappingURL=my-basket-basket-module-es2015.js.map