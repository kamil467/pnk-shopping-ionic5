(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-list-shoplist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-list/shoplist.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-list/shoplist.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n  Generated template for the ShoplistPage page.\r\n\r\n  See http://ionicframework.com/docs/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"crimson\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\r\n    </ion-buttons>\r\n   <ion-title>\r\n      Shop List\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n\r\n  <div *ngIf=\"shopListObservable | async as sList; else loadingErrorTemplate\">\r\n <div *ngFor=\"let shop of sList \">\r\n    <ion-card [routerLink]=\"['/app/tabs/market/product-category-list',shop.storeCode]\">\r\n      <ion-card-header>\r\n        <ion-card-title> {{shop.name}}</ion-card-title>\r\n        <ion-card-subtitle>\r\n          <ion-note>\r\n            <ion-icon name=\"location\"></ion-icon>\r\n            {{shop.location}}\r\n          </ion-note>\r\n        </ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ng-container\r\n        *ngIf=\"shop.tileImageUrl!=null; then customImage;else defaultImage\"\r\n      ></ng-container>\r\n      <ng-template #customImage>\r\n        <img [src]=\"shop.tileImageUrl\" />\r\n      </ng-template>\r\n      <ng-template #defaultImage>\r\n        <ng-container *ngIf=\"shop.categorCode=='fdrst'; then superMarketImage; else restImage\">\r\n\r\n        </ng-container>\r\n      <ng-template #superMarketImage>\r\n        <img\r\n        src=\"../../../assets/img/supermarket.jpg\"\r\n        />\r\n      </ng-template>\r\n      <ng-template #restImage>\r\n        <img\r\n        src=\"../../../assets/img/foodRestTile.jpg\"\r\n        />\r\n      </ng-template>\r\n      </ng-template>\r\n\r\n      <ion-card-content>\r\n        {{shop.description}}\r\n      </ion-card-content>\r\n     <ion-grid>\r\n      <ion-row>\r\n        <ion-col col-4 size=\"4\">\r\n          <ion-chip color=\"crimson\">\r\n            <ion-icon name=\"bicycle\"></ion-icon>\r\n            <ion-label >{{shop.deliverySpeed}}</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col col-4 size=\"4\">\r\n        <ion-chip color=\"crimson\">\r\n          <ion-icon name=\"alarm\"></ion-icon>\r\n          <ion-label >{{shop.operationHours}}</ion-label>\r\n        </ion-chip>\r\n        </ion-col>\r\n        <ion-col  col-4 size=\"4\">\r\n          <ion-chip color=\"crimson\">\r\n            <ion-icon name=\"call\"></ion-icon>\r\n            <ion-label >  {{shop.shopContactNumber1}}</ion-label>\r\n        </ion-chip>\r\n        </ion-col>\r\n\r\n        <div *ngIf=\"shop.deliveryOrderConfig\">\r\n          <ion-chip color=\"crimson\">\r\n            <ion-icon name=\"pricetag\"></ion-icon>      <ion-label >   DeliveryCharge:{{shop.deliveryOrderConfig.deliveryCharge |currency:'INR' }}</ion-label>\r\n          </ion-chip>\r\n          <ion-chip color=\"crimson\">\r\n            <ion-icon name=\"pricetag\"></ion-icon>  <ion-label >minimumOrder:{{shop.deliveryOrderConfig.minimumOrderValue| currency:'INR'}}</ion-label>\r\n          </ion-chip>\r\n        </div>\r\n    \r\n        <ion-chip color=\"crimson\">\r\n          <ion-icon name=\"location\"></ion-icon>\r\n          <ion-label *ngFor=\"let area of shop.serviceArea \">\r\n          {{area.cityName}},\r\n      </ion-label>\r\n        </ion-chip>\r\n      </ion-row>\r\n     </ion-grid>\r\n      \r\n    </ion-card>\r\n  </div>\r\n</div>\r\n<ng-template #loadingErrorTemplate>\r\n  <div class=\"spin\"> <ion-spinner name=\"bubbles\"></ion-spinner>\r\n    </div>\r\n    \r\n</ng-template>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/shop-list/shoplist-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/shop-list/shoplist-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ShopListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopListRoutingModule", function() { return ShopListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shoplist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoplist */ "./src/app/pages/shop-list/shoplist.ts");




const routes = [
    {
        path: '',
        component: _shoplist__WEBPACK_IMPORTED_MODULE_3__["ShoplistPage"]
    }
];
let ShopListRoutingModule = class ShopListRoutingModule {
};
ShopListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopListRoutingModule);



/***/ }),

/***/ "./src/app/pages/shop-list/shoplist.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/shop-list/shoplist.module.ts ***!
  \****************************************************/
/*! exports provided: ShopListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopListModule", function() { return ShopListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shoplist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shoplist */ "./src/app/pages/shop-list/shoplist.ts");
/* harmony import */ var _shoplist_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shoplist-routing.module */ "./src/app/pages/shop-list/shoplist-routing.module.ts");







let ShopListModule = class ShopListModule {
};
ShopListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shoplist_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShopListRoutingModule"]
        ],
        declarations: [
            _shoplist__WEBPACK_IMPORTED_MODULE_5__["ShoplistPage"]
        ],
        entryComponents: [
            _shoplist__WEBPACK_IMPORTED_MODULE_5__["ShoplistPage"]
        ]
    })
], ShopListModule);



/***/ }),

/***/ "./src/app/pages/shop-list/shoplist.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/shop-list/shoplist.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  color: white;\n}\n\n.card-background-page {\n  background-color: #b94545;\n}\n\n.card-background-page .card-footer {\n  border-top: 2px solid #b94545;\n  width: 308px;\n}\n\n.card-background-page .spin {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n}\n\nion-chip {\n  font-size: xx-small;\n}\n\nion-note {\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC1saXN0L0M6XFxJb25pY1Byb2plY3RcXHBuay1zaG9wcGluZy1pb25pYzUvc3JjXFxhcHBcXHBhZ2VzXFxzaG9wLWxpc3RcXHNob3BsaXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nob3AtbGlzdC9zaG9wbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUMsWUFBQTtBQ0ZEOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURHRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdFO0VBRUUsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDRko7O0FEVUE7RUFFRSxtQkFBQTtBQ1RGOztBRFdBO0VBRUUsa0JBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3AtbGlzdC9zaG9wbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9wYWdlLXNob3BsaXN0IHtcclxuLy9iYWNrZ3JvdW5kLWNvbG9yOiNCOTQ1NDU7XHJcbmlvbi10b29sYmFyIFxyXG57XHJcbiBjb2xvcjp3aGl0ZTsgXHJcbn1cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0NTQ1O1xyXG5cclxuICAuY2FyZC1mb290ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNiOTQ1NDU7XHJcbiAgICB3aWR0aDogMzA4cHg7XHJcbiAgfVxyXG4gIC5zcGluXHJcbiAge1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRvcDo1MCU7XHJcbiAgfVxyXG4gIGlvbi1zcGlubmVyXHJcbiAge1xyXG4gICAgXHJcbiAgfVxyXG5cclxufVxyXG5pb24tY2hpcFxyXG57XHJcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcclxufVxyXG5pb24tbm90ZVxyXG57XHJcbiAgZm9udC1zaXplOngtc21hbGw7XHJcbn1cclxuLy99XHJcbiIsImlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0NTQ1O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYjk0NTQ1O1xuICB3aWR0aDogMzA4cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnNwaW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG59XG5pb24tY2hpcCB7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG59XG5cbmlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/shop-list/shoplist.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/shop-list/shoplist.ts ***!
  \*********************************************/
/*! exports provided: ShoplistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoplistPage", function() { return ShoplistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_shoplist_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/shoplist-provider */ "./src/app/providers/shoplist-provider.ts");





/**
 * Generated class for the ShoplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ShoplistPage = class ShoplistPage {
    constructor(shopListProvider, alert, loading, route) {
        this.shopListProvider = shopListProvider;
        this.alert = alert;
        this.loading = loading;
        this.route = route;
        this.defaultHref = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // firebase code
            const categoryCode = this.route.snapshot.paramMap.get('categoryCode'); //get the shop catgeory code from params
            this.shopListObservable = this.shopListProvider.getActiveShopsByCategoryFirebase(categoryCode);
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Error Occurred',
                message: 'Please try again later.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ionViewDidEnter() {
        this.defaultHref = `/app/tabs/market`;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error("Error occurred:" + error);
        }
    }
};
ShoplistPage.ctorParameters = () => [
    { type: _providers_shoplist_provider__WEBPACK_IMPORTED_MODULE_4__["ShopListProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ShoplistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-shoplist",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shoplist.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-list/shoplist.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shoplist.scss */ "./src/app/pages/shop-list/shoplist.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_shoplist_provider__WEBPACK_IMPORTED_MODULE_4__["ShopListProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ShoplistPage);



/***/ })

}]);
//# sourceMappingURL=shop-list-shoplist-module-es2015.js.map