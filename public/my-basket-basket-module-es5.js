function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-basket-basket-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-basket/basket.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-basket/basket.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMyBasketBasketHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-header>\r\n\t<ion-toolbar color=\"crimson\">\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-button (click)=\"backButton()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n\t  </ion-buttons>\r\n\t <ion-title>\r\n\tMy Basket\r\n\t  </ion-title>\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content class=\"basket-content\">\r\n\t<div *ngIf=\"basketItems | async as myBasket\">\r\n\t<ion-card>\r\n\t\t<ion-card-header class=\"card-header\">Cart Summary</ion-card-header>\r\n\r\n\t\t\t<ion-grid class=\"text-center\">\r\n\t\t\t\t<ion-row class=\"text-center\">\r\n\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\tPrice\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\tQty\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-2>\r\n\t\t\t\t\t\tTotal\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t<ion-col col-1>\r\n\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<hr class=\"hr-divider\" />\r\n\t\t\t\t<div *ngFor=\"let item of myBasket.items\">\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"item.productImageUrl != null; then customImage;else defaultImage\">\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-template #customImage>\r\n\t\t\t\t\t\t\t\t<img [src]=\"item.productImageUrl\" />\r\n\t\t\t  </ng-template>\r\n\t\t\t\t\t\t\t\t<ng-template #defaultImage>\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t  src=\"../../../assets/img/default.jpg\"\r\n\t\t\t\t/>\r\n\t\t\t  </ng-template>\r\n\t\t\t\t \r\n\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t{{item.name}}\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\t\t\t{{item.pricePerQuantity  | currency:'INR'}}\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col col-3>\r\n\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-col >\r\n\t\t\t\t\t\t\t\t\t\tqty:{{item.quantity}}\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"add-circle\" style=\"margin-bottom:8px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addQuantity(item)\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"remove-circle\" (click)=\"removeQuantity(item)\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col col-2>\r\n\t\t\t\t\t\t\t\t{{item.totalPrice  | currency:'INR'}}\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col col-1>\r\n\t\t\t\t  <ion-icon name=\"trash\" (click)=\"removeEntireProduct(item)\"></ion-icon>\r\n\t\t\t\t</ion-col>\r\n\t\r\n\t\t\t\t\t</ion-row>\r\n\t\r\n\t\t\t\t\t<hr class=\"hr-divider\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col col-6>\r\n\t\t\t\t\t\tTotal\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col style=\"font-weight:Bold\">\r\n\t\t\t\t   {{basketTotalAmount | currency:'INR'}}\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col col-6>\r\n\t\t\t\t\t\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col style=\"font-weight:Bold\">\r\n\t\t\t\t         +\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col col-6>\r\n\t\t\t\t\t\tDelivery fee\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col style=\"font-weight:Bold\">\r\n\t\t\t\t\t\t\t{{myBasket.deliveryOrderConfig.deliveryCharge | currency:'INR'}}\r\n\t\t\t\t\t\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col col-6>\r\n\t\t\t\t\t\tNet Total\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col style=\"font-weight:Bold\">\r\n\t\t\t\t   {{(basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) | currency:'INR'}}\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col col-1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\r\n\t\t\t</ion-grid>\r\n\r\n\t\t\r\n\r\n\r\n\t<ng-template #emptyCart>\r\n\t\tYour cart is empty. Please add product into your cart.\r\n\t</ng-template>\r\n\t</ion-card>\r\n\r\n\t<ion-card >\r\n\t\t<ion-card-header class=\"card-header\">Checkout \t<ion-icon name=\"checkmark-circle\"></ion-icon></ion-card-header>\r\n\t\t<ion-card-content>\r\n\t\t\t<div  *ngIf=\"((basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) < myBasket.deliveryOrderConfig.minimumOrderValue); let lessTrue\">\r\n\t\t\t\t<ion-chip color=\"crimson\" >\r\n\t\t\t\t\t<ion-icon name=\"close-circle\"></ion-icon>\r\n\t\t\t\t\t<ion-label>Minimum Order value : <strong> {{myBasket.deliveryOrderConfig.minimumOrderValue | currency :'INR'}} </strong></ion-label>\r\n\t\t\t\t</ion-chip>\r\n               \r\n            \r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"(myBasket.totalItemsCount > myBasket.deliveryOrderConfig.maximumQuantity) let maxQuantityTrue\">\r\n\t\t\t\t<ion-chip color=\"crimson\" >\r\n\t\t\t\t\t<ion-icon name=\"close-circle\"></ion-icon>\r\n\t\t\t\t\t<ion-label>Maximum Item Count : <strong> {{myBasket.deliveryOrderConfig.maximumQuantity }} </strong></ion-label>\r\n\t\t\t\t</ion-chip>\r\n\t\t\t   </div>\r\n\t\t\t<div *ngIf=\"((basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) > myBasket.deliveryOrderConfig.maximumOrderValue) let maxOrderTrue\">\r\n\t\t\t\t<ion-chip color=\"crimson\" >\r\n\t\t\t\t\t<ion-icon name=\"close-circle\"></ion-icon>\r\n\t\t\t\t\t<ion-label>Maximum Order value : <strong> {{myBasket.deliveryOrderConfig.maximumOrderValue | currency :'INR'}} </strong></ion-label>\r\n\t\t\t\t</ion-chip>\r\n\t\t\t</div>\r\n\t\r\n\t\t\t<div *ngIf=\"((basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) > myBasket.deliveryOrderConfig.minimumOrderValue) \r\n\t\t\t\t&& ((basketTotalAmount + myBasket.deliveryOrderConfig.deliveryCharge) < myBasket.deliveryOrderConfig.maximumOrderValue)\r\n\t\t\t\">\r\n\r\n\t\t    <ng-container *ngIf=\"isLoggedIn; then showOrderNow; else showLogin\">\r\n\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-template #showOrderNow>\r\n\t\t\t\t<div class=\"text-center\" *ngIf=\"showOrderNowButton\">\r\n\t\t\t\t\t<!-- check customer postal code and shop service area postal code-->\r\n\t\t\t\t\t<div *ngIf=\"isServiceAvailable | async as isAvailable ; else noService\">\r\n\t\t\t\t\t\t<ion-button class=\"order-now\" fill=\"outline\" *ngIf=\"isAvailable=='true'\" round color=\"crimson\" (click)=\"createOrderButtonClicked()\"> Order Now</ion-button>\r\n\t\t\t\t\t    <ion-card  *ngIf=\"isAvailable=='false'\">\r\n\t\t\t\t\t\t\t<ion-card-header color=\"crimson\">\r\n\t\t\t\t\t\t\t No Service  <ion-icon name=\"alert\"></ion-icon>\r\n\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t\t<ion-label><strong>Sorry this store doesn't have delivery service at your pincode. \r\n\t\t\t\t\t\t\t\t\tWe are expanding our service, soon we will cover your location.</strong> </ion-label>\r\n\t\t\t\t\t\t\t</ion-card-content>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ng-template #noService>\r\n\t\t\t\t\t\t<ion-spinner   name=\"bubbles\" >\r\n\r\n\t\t\t\t\t\t</ion-spinner>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\r\n\t\t\t   </div>\r\n\t\t\t</ng-template>\r\n\t<!--Below button should take the user to login -->\t\t\r\n\t\t<ng-template #showLogin>\r\n\t\t\t<div class=\"text-center\">\r\n\t\t\t\t<ion-button class=\"order-now\" fill=\"outline\" routerLink=\"/app/tabs/login\" round color=\"crimson\">Login to Check out </ion-button>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t\t \r\n\t</div>\r\n\t\t</ion-card-content>\r\n\t </ion-card>\r\n\t\r\n</div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/my-basket/basket-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/my-basket/basket-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: BasketPageRoutingModule */

  /***/
  function srcAppPagesMyBasketBasketRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketPageRoutingModule", function () {
      return BasketPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _basket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basket */
    "./src/app/pages/my-basket/basket.ts");

    var routes = [{
      path: '',
      component: _basket__WEBPACK_IMPORTED_MODULE_3__["BasketPage"]
    }];

    var BasketPageRoutingModule = function BasketPageRoutingModule() {
      _classCallCheck(this, BasketPageRoutingModule);
    };

    BasketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BasketPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/my-basket/basket.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/my-basket/basket.module.ts ***!
    \**************************************************/

  /*! exports provided: BasketPageModule */

  /***/
  function srcAppPagesMyBasketBasketModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketPageModule", function () {
      return BasketPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _basket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./basket */
    "./src/app/pages/my-basket/basket.ts");
    /* harmony import */


    var _basket_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./basket-routing.module */
    "./src/app/pages/my-basket/basket-routing.module.ts");

    var BasketPageModule = function BasketPageModule() {
      _classCallCheck(this, BasketPageModule);
    };

    BasketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _basket_routing_module__WEBPACK_IMPORTED_MODULE_6__["BasketPageRoutingModule"]],
      declarations: [_basket__WEBPACK_IMPORTED_MODULE_5__["BasketPage"]],
      entryComponents: [_basket__WEBPACK_IMPORTED_MODULE_5__["BasketPage"]]
    })], BasketPageModule);
    /***/
  },

  /***/
  "./src/app/pages/my-basket/basket.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/my-basket/basket.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMyBasketBasketScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".basket-content {\n  background-color: crimson;\n  color: white;\n}\n\n.hr-divider {\n  border-top: 2px solid crimson;\n  width: 800px;\n}\n\n.order-now {\n  color: white;\n  font-weight: bold;\n}\n\n.text-center {\n  text-align: center;\n}\n\nion-card-header {\n  background-color: #b94545;\n  color: white;\n}\n\nion-toolbar {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktYmFza2V0L0M6XFxJb25pY1Byb2plY3RcXHBuay1zaG9wcGluZy1pb25pYzUvc3JjXFxhcHBcXHBhZ2VzXFxteS1iYXNrZXRcXGJhc2tldC5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1iYXNrZXQvYmFza2V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQztFQUVFLDZCQUFBO0VBQ0MsWUFBQTtBQ0FKOztBREVBO0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FERUE7RUFFRSxrQkFBQTtBQ0FGOztBREdBO0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFFSSxZQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1iYXNrZXQvYmFza2V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFza2V0LWNvbnRlbnRcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuIC5oci1kaXZpZGVyXHJcbiB7XHJcbiAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gfVxyXG4ub3JkZXItbm93XHJcbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGV4dC1jZW50ZXJcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0NTQ1O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5pb24tdG9vbGJhclxyXG57XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSIsIi5iYXNrZXQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhyLWRpdmlkZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgY3JpbXNvbjtcbiAgd2lkdGg6IDgwMHB4O1xufVxuXG4ub3JkZXItbm93IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0NTQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/my-basket/basket.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/my-basket/basket.ts ***!
    \*******************************************/

  /*! exports provided: BasketPage */

  /***/
  function srcAppPagesMyBasketBasketTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketPage", function () {
      return BasketPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _providers_account_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/account-provider */
    "./src/app/providers/account-provider.ts");
    /* harmony import */


    var _providers_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/app.service */
    "./src/app/providers/app.service.ts");
    /* harmony import */


    var _providers_basket_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../providers/basket-provider */
    "./src/app/providers/basket-provider.ts");
    /* harmony import */


    var _providers_order_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../providers/order-provider */
    "./src/app/providers/order-provider.ts");

    var BasketPage = /*#__PURE__*/function () {
      function BasketPage(navCtrl, basketProvider, alert, angularFireAuth, accountProvider, orderProvider, appService, toastController, activatedRoute, router) {
        _classCallCheck(this, BasketPage);

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

      _createClass(BasketPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.basketItems = this.basketProvider.getBasketForOrder(); // load basket Items

          this.updateTotal();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getLoggedInUser();
        }
      }, {
        key: "addQuantity",
        value: function addQuantity(item) {
          console.log("Item id is:" + item.productId);
          this.basketProvider.addItemToBasketOverload(item);
          this.updateTotal();
        }
      }, {
        key: "caluclateTotalAmount",
        value: function caluclateTotalAmount(items) {
          var totalAmount = 0;
          items.forEach(function (i) {
            totalAmount = totalAmount + i.totalPrice;
          });
          return totalAmount;
        }
      }, {
        key: "removeQuantity",
        value: function removeQuantity(item) {
          this.basketProvider.removeItemFromBasket(item);
          this.updateTotal();
        }
      }, {
        key: "removeEntireProduct",
        value: function removeEntireProduct(item) {
          this.basketProvider.emptyProductAllQuantity(item);
          this.updateTotal();
        }
      }, {
        key: "emptyWholeBasket",
        value: function emptyWholeBasket() {
          this.basketProvider.emptyBasket();
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(errorMessage, componenet) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alert.create({
                      cssClass: 'my-custom-class',
                      header: 'Alert',
                      subHeader: 'Error Occurred:' + errorMessage,
                      message: 'Error:' + componenet,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "backButton",
        value: function backButton() {
          this.navCtrl.pop();
        }
      }, {
        key: "updateTotal",
        value: function updateTotal() {
          var _this = this;

          this.basketProvider.getBasketForOrder().subscribe(function (result) {
            _this.basketTotalAmount = _this.caluclateTotalAmount(result.items); // perform total
          });
        }
      }, {
        key: "getLoggedInUser",
        value: function getLoggedInUser() {
          var _this2 = this;

          this.userLoggedSubscription = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (user) {
            if (user) {
              _this2.isLoggedIn = true; // check for shop service area pincode and customer location pin code.

              console.log("Logged in User :" + user.phoneNumber);
            } else {
              _this2.isLoggedIn = false;
              console.log("anonymous user");
            }
          });
          this.isServiceAvailable = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (user) {
            return _this2.accountProvider.getCustomer(user.phoneNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (customer) {
              return _this2.basketProvider.getBasketForOrder().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                var isFound = "false";
                console.log(result);
                var re = result.serviceArea.forEach(function (serviceArea) {
                  if (serviceArea.pincode == customer.postCode) {
                    isFound = "true";
                    return;
                  }
                });
                return isFound;
              }));
            }));
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.userLoggedSubscription != undefined) {// this.userLoggedSubscription.unsubscribe();
          }

          if (this.orderRef != undefined) {//this.orderRef.unsubscribe();
          }
        }
      }, {
        key: "presentConfirmOrderAlert",
        value: function presentConfirmOrderAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alert.create({
                      cssClass: 'my-custom-class',
                      header: 'Order Confirmation!',
                      message: '<strong>Would you like to place the order?</strong>!!!',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {// do nothing.
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          // create order.
                          _this3.createOrder();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "createOrderButtonClicked",
        value: function createOrderButtonClicked() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.presentConfirmOrderAlert();

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var createOrderRef, processingOrder;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    createOrderRef = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (user) {
                      return _this4.accountProvider.getCustomer(user.phoneNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (customer) {
                        return _this4.basketProvider.getBasketForOrder().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (basket) {
                          return _this4.orderProvider.placeOrder(basket, customer);
                        }));
                      }));
                    })); // prsent pop

                    _context4.next = 3;
                    return this.alert.create({
                      cssClass: 'my-custom-class',
                      header: 'Placing your order!',
                      message: '<strong>Please kindly wait...!!!</strong>'
                    });

                  case 3:
                    processingOrder = _context4.sent;
                    processingOrder.present();
                    this.orderRef = createOrderRef.subscribe(function (result) {
                      if (result) {
                        // order successfully placed.
                        // show toast
                        console.log("Order success:" + result); // dismiss it here

                        processingOrder.dismiss();

                        _this4.presentCustomerOrderSuccessToast(); // navigate to order page.


                        _this4.navCtrl.navigateRoot('/app/tabs/market').then(function () {
                          _this4.router.navigate(['/app/tabs/myorder']);
                        });
                      } else {
                        processingOrder.dismiss();
                        console.error("Order failed");

                        _this4.presentAlert("Order failed.", "createOrder");
                      }
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentCustomerOrderSuccessToast",
        value: function presentCustomerOrderSuccessToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastController.create({
                      message: 'Your order has been successfully placed.',
                      duration: 2000,
                      position: 'top',
                      color: "success"
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return BasketPage;
    }();

    BasketPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _providers_basket_provider__WEBPACK_IMPORTED_MODULE_8__["BasketProvider"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _providers_account_provider__WEBPACK_IMPORTED_MODULE_6__["AccountProvider"]
      }, {
        type: _providers_order_provider__WEBPACK_IMPORTED_MODULE_9__["OrderProvider"]
      }, {
        type: _providers_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    BasketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-basket",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./basket.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-basket/basket.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./basket.scss */
      "./src/app/pages/my-basket/basket.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_basket_provider__WEBPACK_IMPORTED_MODULE_8__["BasketProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _providers_account_provider__WEBPACK_IMPORTED_MODULE_6__["AccountProvider"], _providers_order_provider__WEBPACK_IMPORTED_MODULE_9__["OrderProvider"], _providers_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], BasketPage);
    /***/
  }
}]);
//# sourceMappingURL=my-basket-basket-module-es5.js.map