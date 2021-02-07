function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8SS4":function(l,n,u){"use strict";u.r(n),u.d(n,"ShopListModuleNgFactory",(function(){return E}));var e=u("8Y7J"),o=function l(){_classCallCheck(this,l)},t=u("pMnS"),r=u("SVse"),i=u("MKJQ"),b=u("sZkV"),c=u("iInd"),a=u("mrSG"),s=u("SxV6"),m=(u("bW7H"),u("SB80")),p=function(){function l(n,u,e,o,t,r){_classCallCheck(this,l),this.shopListProvider=n,this.alert=u,this.loading=e,this.route=o,this.platform=t,this.navCtrl=r,this.defaultHref=""}return _createClass(l,[{key:"ngOnInit",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,u=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:this.platform.backButton.subscribeWithPriority(10,(function(){return Object(a.b)(u,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:this.navCtrl.pop();case 1:case"end":return l.stop()}}),l,this)})))})),n=this.route.snapshot.paramMap.get("categoryCode"),this.shopListObservable=this.shopListProvider.getActiveShopsByCategoryFirebase(n).pipe(Object(s.a)());case 3:case"end":return l.stop()}}),l,this)})))}},{key:"presentAlert",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alert.create({cssClass:"my-custom-class",header:"Alert",subHeader:"Error Occurred",message:"Please try again later.",buttons:["OK"]});case 2:return n=l.sent,l.next=5,n.present();case 5:case"end":return l.stop()}}),l,this)})))}},{key:"ionViewDidEnter",value:function(){this.defaultHref="/app/tabs/market"}},{key:"handleError",value:function(l){l.error instanceof ErrorEvent?console.error("An error occurred:",l.error.message):console.error("Error occurred:"+l)}},{key:"ngOnDestroy",value:function(){}}]),l}(),f=e.vb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{color:#fff}.card-background-page[_ngcontent-%COMP%]{background-color:#b94545}.card-background-page[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{border-top:2px solid #b94545;width:308px}.card-background-page[_ngcontent-%COMP%]   .spin[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%}ion-chip[_ngcontent-%COMP%]{font-size:xx-small}ion-note[_ngcontent-%COMP%]{font-size:x-small}"]],data:{}});function h(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function g(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.tileImageUrl)}))}function d(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.xb(1,0,null,null,0,"img",[["src","../../../assets/img/foodRestTile.jpg"]],null,null,null,null,null))],null,null)}function x(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.xb(1,0,null,null,0,"img",[["src","../../../assets/img/supermarket.jpg"]],null,null,null,null,null))],null,null)}function w(l){return e.Zb(0,[(l()(),e.gb(16777216,null,null,1,null,d)),e.wb(1,16384,null,0,r.m,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,x)),e.wb(3,16384,null,0,r.m,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(0,null,null,0))],(function(l,n){l(n,1,0,"fdrst"==n.parent.context.$implicit.categoryCode),l(n,3,0,"suprmrkt"==n.parent.context.$implicit.categoryCode)}),null)}function z(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,2,"ion-label",[],null,null,null,i.Ib,i.E)),e.wb(1,49152,null,0,b.O,[e.h,e.l,e.z],null,null),(l()(),e.Wb(2,0,[" ",", "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.cityName)}))}function v(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,29,"div",[],null,null,null,null,null)),(l()(),e.xb(1,0,null,null,7,"ion-chip",[["color","crimson"]],null,null,null,i.qb,i.m)),e.wb(2,49152,null,0,b.t,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.xb(3,0,null,0,1,"ion-icon",[["name","pricetag"]],null,null,null,i.Ab,i.w)),e.wb(4,49152,null,0,b.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.xb(5,0,null,0,3,"ion-label",[],null,null,null,i.Ib,i.E)),e.wb(6,49152,null,0,b.O,[e.h,e.l,e.z],null,null),(l()(),e.Wb(7,0,[" DeliveryCharge:",""])),e.Qb(8,2),(l()(),e.xb(9,0,null,null,7,"ion-chip",[["color","crimson"]],null,null,null,i.qb,i.m)),e.wb(10,49152,null,0,b.t,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.xb(11,0,null,0,1,"ion-icon",[["name","pricetag"]],null,null,null,i.Ab,i.w)),e.wb(12,49152,null,0,b.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.xb(13,0,null,0,3,"ion-label",[],null,null,null,i.Ib,i.E)),e.wb(14,49152,null,0,b.O,[e.h,e.l,e.z],null,null),(l()(),e.Wb(15,0,["minimumOrder:",""])),e.Qb(16,2),(l()(),e.xb(17,0,null,null,6,"ion-chip",[["color","crimson"]],null,null,null,i.qb,i.m)),e.wb(18,49152,null,0,b.t,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.xb(19,0,null,0,1,"ion-icon",[["name","logo-paypal"]],null,null,null,i.Ab,i.w)),e.wb(20,49152,null,0,b.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.xb(21,0,null,0,2,"ion-label",[],null,null,null,i.Ib,i.E)),e.wb(22,49152,null,0,b.O,[e.h,e.l,e.z],null,null),(l()(),e.Wb(23,0,["",""])),(l()(),e.xb(24,0,null,null,5,"ion-chip",[["color","crimson"]],null,null,null,i.qb,i.m)),e.wb(25,49152,null,0,b.t,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.xb(26,0,null,0,1,"ion-icon",[["name","location"]],null,null,null,i.Ab,i.w)),e.wb(27,49152,null,0,b.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.gb(16777216,null,0,1,null,z)),e.wb(29,278528,null,0,r.l,[e.P,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,"crimson"),l(n,4,0,"pricetag"),l(n,10,0,"crimson"),l(n,12,0,"pricetag"),l(n,18,0,"crimson"),l(n,20,0,"logo-paypal"),l(n,25,0,"crimson"),l(n,27,0,"location"),l(n,29,0,n.parent.context.$implicit.serviceArea)}),(function(l,n){var u=e.Xb(n,7,0,l(n,8,0,e.Mb(n.parent.parent.parent,0),n.parent.context.$implicit.deliveryOrderConfig.deliveryCharge,"INR"));l(n,7,0,u);var o=e.Xb(n,15,0,l(n,16,0,e.Mb(n.parent.parent.parent,0),n.parent.context.$implicit.deliveryOrderConfig.minimumOrderValue,"INR"));l(n,15,0,o),l(n,23,0,n.parent.context.$implicit.deliveryOrderConfig.paymentMode)}))}function k(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,57,"div",[],null,null,null,null,null)),(l()(),e.xb(1,0,null,null,56,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Mb(l,3).onClick()&&o),"click"===n&&(o=!1!==e.Mb(l,5).onClick(u)&&o),o}),i.ob,i.g)),e.wb(2,49152,null,0,b.n,[e.h,e.l,e.z],null,null),e.wb(3,16384,null,0,c.n,[c.m,c.a,[8,null],e.D,e.l],{routerLink:[0,"routerLink"]},null),e.Nb(4,3),e.wb(5,737280,null,0,b.Lb,[r.j,b.Gb,e.l,c.m,[2,c.n]],null,null),(l()(),e.xb(6,0,null,0,11,"ion-card-header",[],null,null,null,i.lb,i.i)),e.wb(7,49152,null,0,b.p,[e.h,e.l,e.z],null,null),(l()(),e.xb(8,0,null,0,2,"ion-card-title",[],null,null,null,i.nb,i.k)),e.wb(9,49152,null,0,b.r,[e.h,e.l,e.z],null,null),(l()(),e.Wb(10,0,[" ",""])),(l()(),e.xb(11,0,null,0,6,"ion-card-subtitle",[],null,null,null,i.mb,i.j)),e.wb(12,49152,null,0,b.q,[e.h,e.l,e.z],null,null),(l()(),e.xb(13,0,null,0,4,"ion-note",[],null,null,null,i.Ob,i.K)),e.wb(14,49152,null,0,b.W,[e.h,e.l,e.z],null,null),(l()(),e.xb(15,0,null,0,1,"ion-icon",[["name","location"]],null,null,null,i.Ab,i.w)),e.wb(16,49152,null,0,b.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.Wb(17,0,[" "," "])),(l()(),e.gb(16777216,null,0,1,null,h)),e.wb(19,16384,null,0,r.m,[e.P,e.L],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"],ngIfElse:[2,"ngIfElse"]},null),(l()(),e.gb(0,[["customImage",2]],0,0,null,g)),(l()(),e.gb(0,[["defaultImage",2]],0,0,null,w)),(l()(),e.xb(22,0,null,0,2,"ion-card-content",[],null,null,null,i.kb,i.h)),e.wb(23,49152,null,0,b.o,[e.h,e.l,e.z],null,null),(l()(),e.Wb(24,0,[" "," "])),(l()(),e.xb(25,0,null,0,32,"ion-grid",[],null,null,null,i.yb,i.u)),e.wb(26,49152,null,0,b.B,[e.h,e.l,e.z],null,null),(l()(),e.xb(27,0,null,0,30,"ion-row",[],null,null,null,i.Qb,i.M)),e.wb(28,49152,null,0,b.hb,[e.h,e.l,e.z],null,null),(l()(),e.xb(29,0,null,0,8,"ion-col",[["col-4",""],["size","4"]],null,null,null,i.rb,i.n)),e.wb(30,49152,null,0,b.u,[e.h,e.l,e.z],{size:[0,"size"]},null),(l()(),e.xb(31,0,null,0,6,"ion-chip",[["color","crimson"]],null,null,null,i.qb,i.m)),e.wb(32,49152,null,0,b.t,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.xb(33,0,null,0,1,"ion-icon",[["name","bicycle"]],null,null,null,i.Ab,i.w)),e.wb(34,49152,null,0,b.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.xb(35,0,null,0,2,"ion-label",[],null,null,null,i.Ib,i.E)),e.wb(36,49152,null,0,b.O,[e.h,e.l,e.z],null,null),(l()(),e.Wb(37,0,["",""])),(l()(),e.xb(38,0,null,0,8,"ion-col",[["col-4",""],["size","4"]],null,null,null,i.rb,i.n)),e.wb(39,49152,null,0,b.u,[e.h,e.l,e.z],{size:[0,"size"]},null),(l()(),e.xb(40,0,null,0,6,"ion-chip",[["color","crimson"]],null,null,null,i.qb,i.m)),e.wb(41,49152,null,0,b.t,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.xb(42,0,null,0,1,"ion-icon",[["name","alarm"]],null,null,null,i.Ab,i.w)),e.wb(43,49152,null,0,b.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.xb(44,0,null,0,2,"ion-label",[],null,null,null,i.Ib,i.E)),e.wb(45,49152,null,0,b.O,[e.h,e.l,e.z],null,null),(l()(),e.Wb(46,0,["",""])),(l()(),e.xb(47,0,null,0,8,"ion-col",[["col-4",""],["size","4"]],null,null,null,i.rb,i.n)),e.wb(48,49152,null,0,b.u,[e.h,e.l,e.z],{size:[0,"size"]},null),(l()(),e.xb(49,0,null,0,6,"ion-chip",[["color","crimson"]],null,null,null,i.qb,i.m)),e.wb(50,49152,null,0,b.t,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.xb(51,0,null,0,1,"ion-icon",[["name","call"]],null,null,null,i.Ab,i.w)),e.wb(52,49152,null,0,b.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.xb(53,0,null,0,2,"ion-label",[],null,null,null,i.Ib,i.E)),e.wb(54,49152,null,0,b.O,[e.h,e.l,e.z],null,null),(l()(),e.Wb(55,0,[" ",""])),(l()(),e.gb(16777216,null,0,1,null,v)),e.wb(57,16384,null,0,r.m,[e.P,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=l(n,4,0,"/app/tabs/market/product-category-list",n.context.$implicit.storeCode,n.context.$implicit.name);l(n,3,0,u),l(n,5,0),l(n,16,0,"location"),l(n,19,0,null!=n.context.$implicit.tileImageUrl,e.Mb(n,20),e.Mb(n,21)),l(n,30,0,"4"),l(n,32,0,"crimson"),l(n,34,0,"bicycle"),l(n,39,0,"4"),l(n,41,0,"crimson"),l(n,43,0,"alarm"),l(n,48,0,"4"),l(n,50,0,"crimson"),l(n,52,0,"call"),l(n,57,0,n.context.$implicit.deliveryOrderConfig)}),(function(l,n){l(n,10,0,n.context.$implicit.name),l(n,17,0,n.context.$implicit.location),l(n,24,0,n.context.$implicit.description),l(n,37,0,n.context.$implicit.deliverySpeed),l(n,46,0,n.context.$implicit.operationHours),l(n,55,0,n.context.$implicit.shopContactNumber1)}))}function C(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,k)),e.wb(2,278528,null,0,r.l,[e.P,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.context.ngIf)}),null)}function O(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,2,"div",[["class","spin"]],null,null,null,null,null)),(l()(),e.xb(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,i.Yb,i.U)),e.wb(2,49152,null,0,b.qb,[e.h,e.l,e.z],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"bubbles")}),null)}function y(l){return e.Zb(0,[e.Ob(0,r.d,[e.u,e.k]),(l()(),e.xb(1,0,null,null,11,"ion-header",[],null,null,null,i.zb,i.v)),e.wb(2,49152,null,0,b.C,[e.h,e.l,e.z],null,null),(l()(),e.xb(3,0,null,0,9,"ion-toolbar",[["color","crimson"]],null,null,null,i.hc,i.db)),e.wb(4,49152,null,0,b.Ab,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.xb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.jb,i.f)),e.wb(6,49152,null,0,b.m,[e.h,e.l,e.z],null,null),(l()(),e.xb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Mb(l,9).onClick(u)&&o),o}),i.gb,i.c)),e.wb(8,49152,null,0,b.h,[e.h,e.l,e.z],{defaultHref:[0,"defaultHref"]},null),e.wb(9,16384,null,0,b.i,[[2,b.gb],b.Gb,b.e],{defaultHref:[0,"defaultHref"]},null),(l()(),e.xb(10,0,null,0,2,"ion-title",[],null,null,null,i.fc,i.bb)),e.wb(11,49152,null,0,b.yb,[e.h,e.l,e.z],null,null),(l()(),e.Wb(-1,0,[" Shop List "])),(l()(),e.xb(13,0,null,null,5,"ion-content",[["class","card-background-page"]],null,null,null,i.sb,i.o)),e.wb(14,49152,null,0,b.v,[e.h,e.l,e.z],null,null),(l()(),e.gb(16777216,null,0,2,null,C)),e.wb(16,16384,null,0,r.m,[e.P,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e.Ob(131072,r.b,[e.h]),(l()(),e.gb(0,[["loadingErrorTemplate",2]],0,0,null,O))],(function(l,n){var u=n.component;l(n,4,0,"crimson"),l(n,8,0,u.defaultHref),l(n,9,0,u.defaultHref),l(n,16,0,e.Xb(n,16,0,e.Mb(n,17).transform(u.shopListObservable)),e.Mb(n,18))}),null)}var I=e.tb("page-shoplist",p,(function(l){return e.Zb(0,[(l()(),e.xb(0,0,null,null,1,"page-shoplist",[],null,null,null,y,f)),e.wb(1,245760,null,0,p,[m.a,b.b,b.Db,c.a,b.Jb,b.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),M=u("s7LF"),P=function l(){_classCallCheck(this,l)},E=e.ub(o,[],(function(l){return e.Jb([e.Kb(512,e.j,e.Y,[[8,[t.a,I]],[3,e.j],e.x]),e.Kb(4608,r.o,r.n,[e.u]),e.Kb(4608,M.q,M.q,[]),e.Kb(4608,b.c,b.c,[e.z,e.g]),e.Kb(4608,b.Fb,b.Fb,[b.c,e.j,e.r]),e.Kb(4608,b.Kb,b.Kb,[b.c,e.j,e.r]),e.Kb(1073742336,r.c,r.c,[]),e.Kb(1073742336,M.p,M.p,[]),e.Kb(1073742336,M.e,M.e,[]),e.Kb(1073742336,b.Cb,b.Cb,[]),e.Kb(1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),e.Kb(1073742336,P,P,[]),e.Kb(1073742336,o,o,[]),e.Kb(1024,c.k,(function(){return[[{path:"",component:p}]]}),[])])}))},bW7H:function(l,n){}}]);