function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-category-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-category/category.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-category/category.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductCategoryCategoryHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\r\n  Generated template for the ProductCategoryListPage page.\r\n\r\n  See http://ionicframework.com/docs/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n<ion-header>\r\n  <ion-toolbar color=\"crimson\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"backButton()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n   <ion-title>\r\n      Product Category\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"card-background-page\">\r\n   \r\n\t<div *ngIf=\"basketObjObservable | async as myBasket; else loadingErrorTemplate\">\r\n\t\t<div *ngIf = \"myBasket.totalItemsCount != 0\">\r\n\r\n\t\t\r\n\t\t<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" >\r\n\t\t\t<ion-fab-button   outline routerLink=\"/app/tabs/market/my-basket\">\r\n\t\t\t\t<ion-badge >{{myBasket.totalItemsCount}}</ion-badge>\r\n\t\t\t\t<ion-icon name=\"cart-sharp\"></ion-icon></ion-fab-button>\r\n\t\t  </ion-fab>\r\n\t</div>\r\n</div>\r\n\t<div *ngIf=\"productCatgeoryListObservable | async as catList ; else loadingErrorTemplate\">\r\n\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col col-4 *ngFor=\"let category of catList\" size=\"4\">\r\n\t\t\t\t\t<ng-container *ngIf=\"category != undefined; then pccard;\">\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #pccard>\r\n\t\t\t\t\t\t<ion-card [routerLink]=\"['/app/tabs/market/product-list',category.id,category.storeCode]\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"category.imageURL != null; then customImage;else defaultImage\">\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-template #customImage>\r\n\t\t\t\t\t\t\t\t<img [src]=\"category.imageURL\" />\r\n              </ng-template>\r\n\t\t\t\t\t\t\t\t<ng-template #defaultImage>\r\n\t\t\t\t\t\t\t\t\t<img\r\n                  src=\"../../../assets/img/product_category.png\"\r\n                />\r\n              </ng-template>\r\n\t\t\t\t\t\t\t\t\t<ion-row class=\"cat-name\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-col col-12 align-self-center text-center>\r\n\t\t\t\t\t\t\t\t\t\t\t<div>{{category.name}}</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\r\n\t</ion-grid>\r\n\t</div>\r\n\t<ng-template #loadingErrorTemplate>\r\n\t\t<div class=\"spin\"> <ion-spinner name=\"bubbles\"></ion-spinner>\r\n\t\t  </div>\r\n\t\t  \r\n\t  </ng-template>\r\n</ion-content>\r\n<!--\r\n<ion-footer class=\"basket-footer\">\r\n\t<ion-toolbar>\r\n   <app-footer-basket [basketFooterObj]=\"basketFooterObj\"></app-footer-basket>\r\n\t</ion-toolbar>\r\n\r\n</ion-footer>  -->";
    /***/
  },

  /***/
  "./src/app/pages/product-category/category-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/product-category/category-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CategoryRoutingModule */

  /***/
  function srcAppPagesProductCategoryCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function () {
      return CategoryRoutingModule;
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


    var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category */
    "./src/app/pages/product-category/category.ts");

    var routes = [{
      path: '',
      component: _category__WEBPACK_IMPORTED_MODULE_3__["CategoryListPage"]
    }];

    var CategoryRoutingModule = function CategoryRoutingModule() {
      _classCallCheck(this, CategoryRoutingModule);
    };

    CategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/product-category/category.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/product-category/category.module.ts ***!
    \***********************************************************/

  /*! exports provided: CategoryModule */

  /***/
  function srcAppPagesProductCategoryCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryModule", function () {
      return CategoryModule;
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


    var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category */
    "./src/app/pages/product-category/category.ts");
    /* harmony import */


    var _category_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category-routing.module */
    "./src/app/pages/product-category/category-routing.module.ts");

    var CategoryModule = function CategoryModule() {
      _classCallCheck(this, CategoryModule);
    };

    CategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_6__["CategoryRoutingModule"]],
      declarations: [_category__WEBPACK_IMPORTED_MODULE_5__["CategoryListPage"]],
      entryComponents: [_category__WEBPACK_IMPORTED_MODULE_5__["CategoryListPage"]]
    })], CategoryModule);
    /***/
  },

  /***/
  "./src/app/pages/product-category/category.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/product-category/category.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductCategoryCategoryScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  color: white;\n}\n\n.cat-name {\n  background-color: crimson;\n  font-weight: bold;\n  color: white;\n}\n\n.spin {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXRlZ29yeS9DOlxcSW9uaWNQcm9qZWN0XFxwbmstc2hvcHBpbmctaW9uaWM1L3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdC1jYXRlZ29yeVxcY2F0ZWdvcnkuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXRlZ29yeS9jYXRlZ29yeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtBQ0FKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDRTtFQUVFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1jYXRlZ29yeS9jYXRlZ29yeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJcclxue1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmNhdC1uYW1lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnNwaW5cclxuICB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdG9wOjUwJTtcclxuICB9IiwiaW9uLXRvb2xiYXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXQtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGluIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/product-category/category.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/product-category/category.ts ***!
    \****************************************************/

  /*! exports provided: CategoryListPage */

  /***/
  function srcAppPagesProductCategoryCategoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListPage", function () {
      return CategoryListPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _providers_basket_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/basket-provider */
    "./src/app/providers/basket-provider.ts");
    /* harmony import */


    var _providers_product_category_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/product-category-provider */
    "./src/app/providers/product-category-provider.ts");
    /* harmony import */


    var _providers_shoplist_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/shoplist-provider */
    "./src/app/providers/shoplist-provider.ts");
    /**
     * Generated class for the ShoplistPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */


    var CategoryListPage = /*#__PURE__*/function () {
      function CategoryListPage(categoryListProvider, alert, loadingController, basketProvider, shopProvider, platform, navCtrl, route) {
        _classCallCheck(this, CategoryListPage);

        this.categoryListProvider = categoryListProvider;
        this.alert = alert;
        this.loadingController = loadingController;
        this.basketProvider = basketProvider;
        this.shopProvider = shopProvider;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.route = route;
        this.defaultHref = '';
        var storeCode = this.route.snapshot.paramMap.get('storeCode'); //get the shopcode from params

        this.platform.backButton.subscribeWithPriority(10, function () {
          console.log('Handler was called!');
        });
      }

      _createClass(CategoryListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var storeCode = this.route.snapshot.paramMap.get('storeCode'); //get the shopcode from params
          // load product category.

          this.productCatgeoryListObservable = this.categoryListProvider.getActiveProductCategoryListByShopCode(storeCode); // initiate the basket. (load shop data and then initaite basket)                                      

          this.basketObjObservable = this.shopProvider.getActiveShopByStoreCode(storeCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (s) {
            return _this.basketProvider.initiateBasket(s).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (basket) {
              var totalItemsCount = 0;
              basket.items.forEach(function (item) {
                totalItemsCount = totalItemsCount + item.quantity;
              });
              console.log("Count is :" + totalItemsCount);
              return Object.assign(Object.assign({}, basket), {
                totalItemsCount: totalItemsCount
              });
            }));
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log("ViewDidEnter");
          this.defaultHref = "/app/tabs/market/shoplist"; // refresh basket on everytime view loaded.

          this.basketObjObservable = this.basketProvider.getBasketForOrder().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (basket) {
            var totalItemsCount = 0;

            if (basket != undefined) {
              basket.items.map(function (item) {
                totalItemsCount = totalItemsCount + item.quantity;
              });
            }

            return Object.assign(Object.assign({}, basket), {
              totalItemsCount: totalItemsCount
            });
          }));
        }
      }, {
        key: "backButton",
        value: function backButton() {
          var _this2 = this;

          console.log("back button clicked");
          this.basketProvider.getBasketForOrder().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (basket) {
            var totalItemsCount = 0;

            if (basket != undefined) {
              basket.items.map(function (item) {
                totalItemsCount = totalItemsCount + item.quantity;
              });
            }

            return Object.assign(Object.assign({}, basket), {
              totalItemsCount: totalItemsCount
            });
          })).subscribe(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(data.totalItemsCount == 0)) {
                        _context.next = 5;
                        break;
                      }

                      // navigate to page
                      console.log("allow to navigate");
                      this.navCtrl.pop();
                      _context.next = 8;
                      break;

                    case 5:
                      _context.next = 7;
                      return this.presentAlert();

                    case 7:
                      console.log("Display popup");

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
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
                      header: 'Alert',
                      subHeader: 'Back to Market?',
                      message: 'you have items in your cart. Cart will be empty if you press Ok.',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          // this.basketProvider.emptyBasket();  system automatically clear the basket.
                          _this3.navCtrl.pop();
                        }
                      }, {
                        text: 'Cancel',
                        handler: function handler() {
                          console.log("do nothing");
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
      }]);

      return CategoryListPage;
    }();

    CategoryListPage.ctorParameters = function () {
      return [{
        type: _providers_product_category_provider__WEBPACK_IMPORTED_MODULE_6__["CategoryListProvider"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _providers_basket_provider__WEBPACK_IMPORTED_MODULE_5__["BasketProvider"]
      }, {
        type: _providers_shoplist_provider__WEBPACK_IMPORTED_MODULE_7__["ShopListProvider"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CategoryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-categoryList",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./category.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-category/category.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./category.scss */
      "./src/app/pages/product-category/category.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_product_category_provider__WEBPACK_IMPORTED_MODULE_6__["CategoryListProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _providers_basket_provider__WEBPACK_IMPORTED_MODULE_5__["BasketProvider"], _providers_shoplist_provider__WEBPACK_IMPORTED_MODULE_7__["ShopListProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], CategoryListPage);
    /***/
  },

  /***/
  "./src/app/providers/product-category-provider.ts":
  /*!********************************************************!*\
    !*** ./src/app/providers/product-category-provider.ts ***!
    \********************************************************/

  /*! exports provided: CategoryListProvider */

  /***/
  function srcAppProvidersProductCategoryProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListProvider", function () {
      return CategoryListProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var CategoryListProvider = /*#__PURE__*/function () {
      /* Data Initialization */
      function CategoryListProvider(http, angularFireCloudStore) {
        _classCallCheck(this, CategoryListProvider);

        this.http = http;
        this.angularFireCloudStore = angularFireCloudStore;
      }

      _createClass(CategoryListProvider, [{
        key: "getProductCategoryList",
        value: function getProductCategoryList(shopCode) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].productCategoryListAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        } //Get active product catgeory for the given shopCode.

      }, {
        key: "getActiveProductCategoryListByShopCode",
        value: function getActiveProductCategoryListByShopCode(shopCode) {
          var _this4 = this;

          var productCategoryRef = this.angularFireCloudStore.collection(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SHOP_LIST_COLLECTION).doc(shopCode).collection(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].PRODUCT_CATEGORY, function (ref) {
            return ref.where("status", "==", "a");
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return data.map(function (finalData) {
              var propdCatObj = finalData.payload.doc.data();
              var id = finalData.payload.doc.id;
              return Object.assign({
                id: id
              }, propdCatObj);
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return _this4.handleError(err);
          }));
          return productCategoryRef;
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            console.error("Detailed error is:" + error);
          } // Return an observable with a user-facing error message.


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
        }
      }]);

      return CategoryListProvider;
    }();

    CategoryListProvider.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }];
    };

    CategoryListProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])], CategoryListProvider);
    /***/
  }
}]);
//# sourceMappingURL=product-category-category-module-es5.js.map