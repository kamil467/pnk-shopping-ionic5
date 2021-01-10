function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSupportSupportHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Support</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"support-logo\">\r\n    <img src=\"assets/img/appicon.svg\" alt=\"Ionic Logo\">\r\n  </div>\r\n\r\n  <form #submitForm=\"ngForm\" novalidate (ngSubmit)=\"submit(submitForm)\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">Enter your support message below</ion-label>\r\n        <ion-textarea [(ngModel)]=\"supportMessage\" name=\"supportQuestion\" #supportQuestion=\"ngModel\" rows=\"6\" required></ion-textarea>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-text color=\"danger\">\r\n      <p [hidden]=\"supportQuestion.valid || submitted === false\" class=\"ion-padding-start\">\r\n        Support message is required\r\n      </p>\r\n    </ion-text>\r\n\r\n    <div class=\"ion-padding\">\r\n      <ion-button expand=\"block\" type=\"submit\">Submit</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/support/support-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/support/support-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SupportPageRoutingModule */

  /***/
  function srcAppPagesSupportSupportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function () {
      return SupportPageRoutingModule;
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


    var _support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./support */
    "./src/app/pages/support/support.ts");

    var routes = [{
      path: '',
      component: _support__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }];

    var SupportPageRoutingModule = function SupportPageRoutingModule() {
      _classCallCheck(this, SupportPageRoutingModule);
    };

    SupportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SupportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/support/support.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/support/support.module.ts ***!
    \*************************************************/

  /*! exports provided: SupportModule */

  /***/
  function srcAppPagesSupportSupportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportModule", function () {
      return SupportModule;
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


    var _support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./support */
    "./src/app/pages/support/support.ts");
    /* harmony import */


    var _support_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./support-routing.module */
    "./src/app/pages/support/support-routing.module.ts");

    var SupportModule = function SupportModule() {
      _classCallCheck(this, SupportModule);
    };

    SupportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _support_routing_module__WEBPACK_IMPORTED_MODULE_6__["SupportPageRoutingModule"]],
      declarations: [_support__WEBPACK_IMPORTED_MODULE_5__["SupportPage"]]
    })], SupportModule);
    /***/
  },

  /***/
  "./src/app/pages/support/support.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/support/support.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSupportSupportScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".support-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.support-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9DOlxcSW9uaWNQcm9qZWN0XFxwbmstc2hvcHBpbmctaW9uaWM1L3NyY1xcYXBwXFxwYWdlc1xcc3VwcG9ydFxcc3VwcG9ydC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cHBvcnQtbG9nbyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1cHBvcnQtbG9nbyBpbWcge1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiIsIi5zdXBwb3J0LWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdXBwb3J0LWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/support/support.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/support/support.ts ***!
    \******************************************/

  /*! exports provided: SupportPage */

  /***/
  function srcAppPagesSupportSupportTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPage", function () {
      return SupportPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SupportPage = /*#__PURE__*/function () {
      function SupportPage(alertCtrl, toastCtrl) {
        _classCallCheck(this, SupportPage);

        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
      }

      _createClass(SupportPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: 'This does not actually send a support request.',
                      duration: 3000
                    });

                  case 2:
                    toast = _context.sent;
                    _context.next = 5;
                    return toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.submitted = true;

                    if (!form.valid) {
                      _context2.next = 9;
                      break;
                    }

                    this.supportMessage = '';
                    this.submitted = false;
                    _context2.next = 6;
                    return this.toastCtrl.create({
                      message: 'Your support request has been sent.',
                      duration: 3000
                    });

                  case 6:
                    toast = _context2.sent;
                    _context2.next = 9;
                    return toast.present();

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SupportPage;
    }();

    SupportPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    SupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-support',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./support.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./support.scss */
      "./src/app/pages/support/support.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], SupportPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-support-support-module-es5.js.map