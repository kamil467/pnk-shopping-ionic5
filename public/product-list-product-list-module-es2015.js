(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-list-product-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-list/product-list.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-list/product-list.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n  Generated template for the ProductListPage page.\r\n\r\n  See http://ionicframework.com/docs/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n<ion-header>\r\n  <ion-toolbar color=\"crimson\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\r\n    </ion-buttons>\r\n   <ion-title>\r\n      Product List\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n\t<div *ngIf=\"basketObjObservable | async as myBasket ; else loadingErrorTemplate\">\r\n\t\t<div *ngIf = \"myBasket.totalItemsCount != 0\">\r\n\r\n\t\t\r\n\t\t<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" >\r\n\t\t\t<ion-fab-button  routerLink=\"/app/tabs/market/my-basket\">\r\n\t\t\t\t<ion-badge  >{{myBasket.totalItemsCount}}</ion-badge>\r\n\t\t\t\t<ion-icon name=\"cart-sharp\"></ion-icon></ion-fab-button>\r\n\t\t  </ion-fab>\r\n\t</div>\r\n</div>\r\n  <div *ngIf=\"allProductsAbservable | async as allProductOb; else loadingErrorTemplate \">\r\n  <ion-grid>\r\n\t\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col col-6 *ngFor=\"let product of allProductOb\" size=\"6\">\r\n\t\t\t\t\t<ng-container *ngIf=\"product != undefined; then productcard;\"></ng-container>\r\n\t\t\t\t\t<ng-template #productcard>\r\n\t\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"product.productImageUrl != null; then customImage;else defaultImage\">\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-template #customImage>\r\n\t\t\t\t\t\t\t\t<img [src]=\"product.productImageUrl\" />\r\n              </ng-template>\r\n\t\t\t\t\t\t\t\t<ng-template #defaultImage>\r\n\t\t\t\t\t\t\t\t\t<img\r\n                  src=\"../../../assets/img/default.jpg\"\r\n                />\r\n              </ng-template>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col col-10>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>{{product.name}}</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col col-2>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"information-circle\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col col>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-note>\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{product.size}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-note>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product.inStock == true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col col class=\"col-end-align\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-badge color=\"secondary\">stock</ion-badge>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product.inStock == false\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col col class=\"col-end-align\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-badge color=\"danger\">no stock</ion-badge>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product.price != 0; then displayOld;\"></ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #displayOld>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong><del>{{product.price  | currency:'INR'}}</del></strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"newprice\">\r\n\t\t\t\t\t\t\t\t\t\t\t<strong><ins>{{product.offeredPrice  | currency:'INR'}}</ins></strong>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"product.inStock == true; then addCart; else showOutOfStock\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #addCart>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col col-12 align-self-center text-center class=\"cart-button\" (click)=\"addToBasket(product)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"basket\"></ion-icon> Add\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #showOutOfStock>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col col-12 align-self-center text-center class=\"cart-button out-stock\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"basket\"></ion-icon> Add\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t</ion-grid>\r\n</div>\r\n<ng-template #loadingErrorTemplate>\r\n\t<div class=\"spin\"> <ion-spinner name=\"bubbles\"></ion-spinner>\r\n\t  </div>\r\n\t  \r\n  </ng-template>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/product-list/product-list-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/product-list/product-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListRoutingModule", function() { return ProductListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list */ "./src/app/pages/product-list/product-list.ts");




const routes = [
    {
        path: '',
        component: _product_list__WEBPACK_IMPORTED_MODULE_3__["ProductListPage"]
    }
];
let ProductListRoutingModule = class ProductListRoutingModule {
};
ProductListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductListRoutingModule);



/***/ }),

/***/ "./src/app/pages/product-list/product-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _product_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list */ "./src/app/pages/product-list/product-list.ts");
/* harmony import */ var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list-routing.module */ "./src/app/pages/product-list/product-list-routing.module.ts");







let ProductListModule = class ProductListModule {
};
ProductListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_list_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductListRoutingModule"]],
        declarations: [_product_list__WEBPACK_IMPORTED_MODULE_5__["ProductListPage"]],
        entryComponents: [_product_list__WEBPACK_IMPORTED_MODULE_5__["ProductListPage"]]
    })
], ProductListModule);



/***/ }),

/***/ "./src/app/pages/product-list/product-list.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/product-list/product-list.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page {\n  background-color: #b94545;\n}\n.card-background-page .newprice {\n  text-align: end;\n}\n.card-background-page .cart-button {\n  background-color: crimson;\n  color: white;\n}\n.card-background-page .stockin {\n  background-color: crimson;\n  color: #f7f4f4;\n}\n.card-background-page .out-stock {\n  opacity: 0.5;\n}\n.card-background-page .col-end-align {\n  text-align: end;\n}\nion-toolbar {\n  color: white;\n}\n.spin {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1saXN0L0M6XFxJb25pY1Byb2plY3RcXHBuay1zaG9wcGluZy1pb25pYzUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LWxpc3RcXHByb2R1Y3QtbGlzdC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtBQ0FKO0FERUk7RUFDRSxlQUFBO0FDQU47QURFSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0FOO0FERUk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNBTjtBREVJO0VBQ0UsWUFBQTtBQ0FOO0FERUk7RUFDRSxlQUFBO0FDQU47QURHQTtFQUVJLFlBQUE7QUNESjtBREdBO0VBRUUsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL3BhZ2UtcHJvZHVjdC1saXN0IHtcclxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5NDU0NTtcclxuICBcclxuICAgIC5uZXdwcmljZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIH1cclxuICAgIC5jYXJ0LWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5zdG9ja2luIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgICAgY29sb3I6IHJnYigyNDcsIDI0NCwgMjQ0KTtcclxuICAgIH1cclxuICAgIC5vdXQtc3RvY2sge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICAuY29sLWVuZC1hbGlnbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIH1cclxuICB9XHJcbmlvbi10b29sYmFyXHJcbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5zcGluXHJcbntcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBsZWZ0OjUwJTtcclxuICB0b3A6NTAlO1xyXG59XHJcbi8vfVxyXG4iLCIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0NTQ1O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5uZXdwcmljZSB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FydC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnN0b2NraW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICBjb2xvcjogI2Y3ZjRmNDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAub3V0LXN0b2NrIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jb2wtZW5kLWFsaWduIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwaW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/product-list/product-list.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product-list/product-list.ts ***!
  \****************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _providers_basket_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/basket-provider */ "./src/app/providers/basket-provider.ts");
/* harmony import */ var _providers_product_list_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/product-list.provider */ "./src/app/providers/product-list.provider.ts");







/**
 * Generated class for the ShoplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ProductListPage = class ProductListPage {
    constructor(productListProvider, basketProvider, loader, alert, route) {
        this.productListProvider = productListProvider;
        this.basketProvider = basketProvider;
        this.loader = loader;
        this.alert = alert;
        this.route = route;
        this.defaultHref = '';
    }
    ionViewDidEnter() {
        this.defaultHref = `/app/tabs/market/product-category-list`;
        this.getBasketFromMemory();
    }
    // call product-list API to load active products. 
    ngOnInit() {
        const storeCode = this.route
            .snapshot
            .paramMap
            .get('storeCode'); //get the shopcode from params
        const productCategoryCode = this.route
            .snapshot
            .paramMap
            .get('productCategoryCode'); // get the productcategoryCode.
        this.allProductsAbservable = this.productListProvider
            .getActiveProductList(productCategoryCode, storeCode); // observable will be called on template  
        this.getBasketFromMemory();
    }
    // get latest basket from in-memory.
    getBasketFromMemory() {
        this.basketObjObservable = this.basketProvider
            .getBasketForOrder()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(basket => {
            let totalItemsCount = 0;
            if (basket != undefined) {
                basket.items.forEach(item => {
                    totalItemsCount = totalItemsCount + item.quantity;
                });
            }
            return (Object.assign(Object.assign({}, basket), { totalItemsCount: totalItemsCount }));
        }));
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
    addToBasket(product) {
        console.log("add to basket clicked" + product.name);
        // build orderItem.
        this.basketProvider.addItemToBasket(product);
        this.getBasketFromMemory();
        // refresh the basket everytim.// local call - no expensive service call.
    }
};
ProductListPage.ctorParameters = () => [
    { type: _providers_product_list_provider__WEBPACK_IMPORTED_MODULE_6__["ProductListProvider"] },
    { type: _providers_basket_provider__WEBPACK_IMPORTED_MODULE_5__["BasketProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-product-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-list/product-list.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-list.scss */ "./src/app/pages/product-list/product-list.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_product_list_provider__WEBPACK_IMPORTED_MODULE_6__["ProductListProvider"], _providers_basket_provider__WEBPACK_IMPORTED_MODULE_5__["BasketProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ProductListPage);



/***/ }),

/***/ "./src/app/providers/product-list.provider.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/product-list.provider.ts ***!
  \****************************************************/
/*! exports provided: ProductListProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListProvider", function() { return ProductListProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");








let ProductListProvider = class ProductListProvider {
    /* Data Initialization */
    constructor(http, angularFireCloudStore) {
        this.http = http;
        this.angularFireCloudStore = angularFireCloudStore;
    }
    getProductsByCategory(categroyCode) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].productListAPI)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => this.handleError(err)));
    }
    getActiveProductMappingListByCategoryCode(categorCode, shopCode) {
        const productsMapResult = this.angularFireCloudStore
            .collection(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SHOP_LIST_COLLECTION)
            .doc(shopCode)
            .collection(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].PRODUCT_CATEGORY_MAPPING, ref => ref.where("categoryId", "==", categorCode))
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => this.handleError(err, "getActiveProductMappingListByCategoryCode")));
        return productsMapResult;
    }
    getActiveProduct(productId, shopCode) {
        const productRef = this.angularFireCloudStore.collection(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SHOP_LIST_COLLECTION)
            .doc(shopCode)
            .collection(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].PRODUCT_LIST, ref => ref.where("status", "==", "a"))
            .doc(productId)
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(finalData => {
            console.log("data is :" + finalData.name);
            return (Object.assign(Object.assign({}, finalData), { id: productId })); // load the id.
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => this.handleError(err, "getActiveProduct")));
        return productRef;
    }
    getActiveProductList(categoryCode, shopCode) {
        const productList = this.getActiveProductMappingListByCategoryCode(categoryCode, shopCode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((productMapping) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(productMapping).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(pMap => this.getActiveProduct(pMap.productId, shopCode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(product => (Object.assign({}, product))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => this.handleError(err, "getActiveProductList")));
        return productList;
    }
    handleError(error, caller = null) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            console.error("Detailed error is :" + error + "and caller is:" + caller);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
};
ProductListProvider.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
];
ProductListProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
], ProductListProvider);



/***/ })

}]);
//# sourceMappingURL=product-list-product-list-module-es2015.js.map