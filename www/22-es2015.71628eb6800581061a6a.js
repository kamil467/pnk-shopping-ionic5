(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{MUjJ:function(l,n,u){"use strict";u.r(n),u.d(n,"CategoryModuleNgFactory",(function(){return G}));var t=u("8Y7J");class o{}var e=u("pMnS"),r=u("MKJQ"),i=u("sZkV"),b=u("iInd"),c=u("SVse"),a=u("mrSG"),s=(u("L3ni"),u("FvS8")),g=u("z6cu"),d=u("un/a"),h=u("JIr8"),p=u("lJxs"),f=u("AytR"),m=u("IheW"),w=u("wD+u");let x=(()=>{class l{constructor(l,n){this.http=l,this.angularFireCloudStore=n}getProductCategoryList(l){return this.http.get(f.a.productCategoryListAPI).pipe(Object(d.a)(3),Object(h.a)(this.handleError))}getActiveProductCategoryListByShopCode(l){return this.angularFireCloudStore.collection(f.a.SHOP_LIST_COLLECTION).doc(l).collection(f.a.PRODUCT_CATEGORY,l=>l.where("status","==","a")).snapshotChanges().pipe(Object(p.a)(l=>l.map(l=>{const n=l.payload.doc.data();return Object.assign({id:l.payload.doc.id},n)})),Object(h.a)(l=>this.handleError(l)))}handleError(l){return l.error instanceof ErrorEvent?console.error("An error occurred:",l.error.message):(console.error(`Backend returned code ${l.status}, body was: `+l.error),console.error("Detailed error is:"+l)),Object(g.a)("Something bad happened; please try again later.")}}return l.\u0275prov=t.ac({factory:function(){return new l(t.bc(m.c),t.bc(w.a))},token:l,providedIn:"root"}),l})();var k=u("wc23"),v=u("SB80");class I{constructor(l,n,u,t,o,e,r,i,b,c){this.categoryListProvider=l,this.alert=n,this.loadingController=u,this.basketProvider=t,this.shopProvider=o,this.platform=e,this.navCtrl=r,this.route=i,this.productProvider=b,this.changeRef=c,this.defaultHref="",this.slideOpt={direction:"horizontal",slidesPerView:2,pagination:{el:".swiper-pagination"}},this.route.snapshot.paramMap.get("storeCode"),this.platform.backButton.subscribeWithPriority(10,()=>{console.log("Handler was called!")})}ngOnInit(){const l=this.route.snapshot.paramMap.get("storeCode");this.shopName=this.route.snapshot.paramMap.get("shopName"),this.productCatgeoryListObservable=this.categoryListProvider.getActiveProductCategoryListByShopCode(l),this.shopSubscription=this.shopProvider.getActiveShopByStoreCode(l).subscribe(n=>{null!=n?(this.isEnableForOfferZone=n.showOfferZone,console.log(this.isEnableForOfferZone),n.showOfferZone&&(this.offerZoneProducts=this.productProvider.getOfferZoneProducts(l)),this.basketDirect=this.basketProvider.initiateBasket(n)):console.error("Could not load the basket")})}ionViewWillEnter(){console.log("ViewWillLoad"),this.basketDirect=this.basketProvider.getBasketDirect()}ionViewDidEnter(){this.defaultHref="/app/tabs/market/shoplist",this.basketDirect=this.basketProvider.getBasketDirect(),console.log(this.basketDirect)}backButton(){return Object(a.b)(this,void 0,void 0,(function*(){console.log("Back button clicked");const l=this.basketProvider.getBasketDirect();console.log(l),0==l.totalItemsCount?(console.log("allow to navigate"),this.navCtrl.pop()):(yield this.presentAlert(),console.log("Display popup"))}))}presentAlert(){return Object(a.b)(this,void 0,void 0,(function*(){const l=yield this.alert.create({cssClass:"my-custom-class",header:"Alert",subHeader:"Back to Market?",message:"you have items in your cart. Cart will be empty if you press Ok.",buttons:[{text:"Ok",handler:()=>{this.navCtrl.pop()}},{text:"Cancel",handler:()=>{console.log("do nothing")}}]});yield l.present()}))}ionViewDidLeave(){console.log("ionViewDidLeave called"),this.shopSubscription.unsubscribe()}ngOnDestroy(){this.shopSubscription.unsubscribe()}addToBasket(l){console.log("special offer zone product clicked"),console.log(l),null==l&&null==l||(this.basketProvider.addItemToBasket(l),this.basketDirect=this.basketProvider.getBasketDirect())}}var z=t.vb({encapsulation:0,styles:[[".cat-name[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{color:#fff}.cat-name[_ngcontent-%COMP%]{background-color:#dc143c;font-weight:700}.spin[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%}ion-slides[_ngcontent-%COMP%]{height:20%}.slide-card[_ngcontent-%COMP%]{margin:0;border:1px solid #dc143c}.slide-card[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%]{height:inherit}.offer-zone-product-card[_ngcontent-%COMP%]{margin:0;border:2px solid #dc143c}"]],data:{}});function P(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),t.xb(1,0,null,null,10,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,r.wb,r.q)),t.wb(2,49152,null,0,i.x,[t.h,t.l,t.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.xb(3,0,null,0,8,"ion-fab-button",[["outline",""],["routerLink","/app/tabs/market/my-basket"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Mb(l,5).onClick()&&o),"click"===n&&(o=!1!==t.Mb(l,6).onClick(u)&&o),o}),r.ub,r.r)),t.wb(4,49152,null,0,i.y,[t.h,t.l,t.z],null,null),t.wb(5,16384,null,0,b.n,[b.m,b.a,[8,null],t.D,t.l],{routerLink:[0,"routerLink"]},null),t.wb(6,737280,null,0,i.Lb,[c.j,i.Gb,t.l,b.m,[2,b.n]],null,null),(l()(),t.xb(7,0,null,0,2,"ion-badge",[],null,null,null,r.hb,r.d)),t.wb(8,49152,null,0,i.k,[t.h,t.l,t.z],null,null),(l()(),t.Wb(9,0,["",""])),(l()(),t.xb(10,0,null,0,1,"ion-icon",[["name","cart-sharp"]],null,null,null,r.Ab,r.w)),t.wb(11,49152,null,0,i.D,[t.h,t.l,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"end","top"),l(n,5,0,"/app/tabs/market/my-basket"),l(n,6,0),l(n,11,0,"cart-sharp")}),(function(l,n){l(n,9,0,n.component.basketDirect.totalItemsCount)}))}function C(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,P)),t.wb(2,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,0!=n.component.basketDirect.totalItemsCount)}),null)}function O(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function y(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.productImageUrl)}))}function L(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,0,"img",[["src","../../../assets/img/default.jpg"]],null,null,null,null,null))],null,null)}function M(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t.xb(1,0,null,null,4,"ion-col",[["class","col-end-align"],["col",""]],null,null,null,r.rb,r.n)),t.wb(2,49152,null,0,i.u,[t.h,t.l,t.z],null,null),(l()(),t.xb(3,0,null,0,2,"ion-badge",[["color","secondary"]],null,null,null,r.hb,r.d)),t.wb(4,49152,null,0,i.k,[t.h,t.l,t.z],{color:[0,"color"]},null),(l()(),t.Wb(-1,0,["stock"]))],(function(l,n){l(n,4,0,"secondary")}),null)}function Z(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t.xb(1,0,null,null,4,"ion-col",[["class","col-end-align"],["col",""]],null,null,null,r.rb,r.n)),t.wb(2,49152,null,0,i.u,[t.h,t.l,t.z],null,null),(l()(),t.xb(3,0,null,0,2,"ion-badge",[["color","danger"]],null,null,null,r.hb,r.d)),t.wb(4,49152,null,0,i.k,[t.h,t.l,t.z],{color:[0,"color"]},null),(l()(),t.Wb(-1,0,["no stock"]))],(function(l,n){l(n,4,0,"danger")}),null)}function D(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function E(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,5,"ion-col",[],null,null,null,r.rb,r.n)),t.wb(1,49152,null,0,i.u,[t.h,t.l,t.z],null,null),(l()(),t.xb(2,0,null,0,3,"strong",[],null,null,null,null,null)),(l()(),t.xb(3,0,null,null,2,"del",[],null,null,null,null,null)),(l()(),t.Wb(4,null,["",""])),t.Qb(5,2)],null,(function(l,n){var u=t.Xb(n,4,0,l(n,5,0,t.Mb(n.parent.parent.parent.parent,0),n.parent.context.$implicit.price,"INR"));l(n,4,0,u)}))}function S(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,41,"ion-slide",[],null,null,null,r.Wb,r.S)),t.wb(1,49152,null,0,i.ob,[t.h,t.l,t.z],null,null),(l()(),t.xb(2,0,null,0,39,"ion-card",[["class","offer-zone-product-card"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addToBasket(l.context.$implicit)&&t),t}),r.ob,r.g)),t.wb(3,49152,null,0,i.n,[t.h,t.l,t.z],null,null),(l()(),t.xb(4,0,null,0,1,"ion-ripple-effect",[],null,null,null,r.Pb,r.L)),t.wb(5,49152,null,0,i.fb,[t.h,t.l,t.z],null,null),(l()(),t.gb(16777216,null,0,1,null,O)),t.wb(7,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"],ngIfElse:[2,"ngIfElse"]},null),(l()(),t.gb(0,[["customImage",2]],0,0,null,y)),(l()(),t.gb(0,[["defaultImage",2]],0,0,null,L)),(l()(),t.xb(10,0,null,0,9,"ion-row",[],null,null,null,r.Qb,r.M)),t.wb(11,49152,null,0,i.hb,[t.h,t.l,t.z],null,null),(l()(),t.xb(12,0,null,0,3,"ion-col",[["col-10",""]],null,null,null,r.rb,r.n)),t.wb(13,49152,null,0,i.u,[t.h,t.l,t.z],null,null),(l()(),t.xb(14,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t.Wb(15,null,["",""])),(l()(),t.xb(16,0,null,0,3,"ion-col",[["col-2",""]],null,null,null,r.rb,r.n)),t.wb(17,49152,null,0,i.u,[t.h,t.l,t.z],null,null),(l()(),t.xb(18,0,null,0,1,"ion-icon",[["name","information-circle"]],null,null,null,r.Ab,r.w)),t.wb(19,49152,null,0,i.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.xb(20,0,null,0,10,"ion-row",[],null,null,null,r.Qb,r.M)),t.wb(21,49152,null,0,i.hb,[t.h,t.l,t.z],null,null),(l()(),t.xb(22,0,null,0,4,"ion-col",[["col",""]],null,null,null,r.rb,r.n)),t.wb(23,49152,null,0,i.u,[t.h,t.l,t.z],null,null),(l()(),t.xb(24,0,null,0,2,"ion-note",[],null,null,null,r.Ob,r.K)),t.wb(25,49152,null,0,i.W,[t.h,t.l,t.z],null,null),(l()(),t.Wb(26,0,[" "," "])),(l()(),t.gb(16777216,null,0,1,null,M)),t.wb(28,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,Z)),t.wb(30,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.xb(31,0,null,0,10,"ion-row",[],null,null,null,r.Qb,r.M)),t.wb(32,49152,null,0,i.hb,[t.h,t.l,t.z],null,null),(l()(),t.gb(16777216,null,0,1,null,D)),t.wb(34,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"]},null),(l()(),t.gb(0,[["displayOld",2]],0,0,null,E)),(l()(),t.xb(36,0,null,0,5,"ion-col",[["class","newprice"]],null,null,null,r.rb,r.n)),t.wb(37,49152,null,0,i.u,[t.h,t.l,t.z],null,null),(l()(),t.xb(38,0,null,0,3,"strong",[],null,null,null,null,null)),(l()(),t.xb(39,0,null,null,2,"ins",[],null,null,null,null,null)),(l()(),t.Wb(40,null,["",""])),t.Qb(41,2)],(function(l,n){l(n,7,0,null!=n.context.$implicit.productImageUrl,t.Mb(n,8),t.Mb(n,9)),l(n,19,0,"information-circle"),l(n,28,0,1==n.context.$implicit.inStock),l(n,30,0,0==n.context.$implicit.inStock),l(n,34,0,0!=n.context.$implicit.price,t.Mb(n,35))}),(function(l,n){l(n,15,0,n.context.$implicit.name),l(n,26,0,n.context.$implicit.size);var u=t.Xb(n,40,0,l(n,41,0,t.Mb(n.parent.parent.parent,0),n.context.$implicit.offeredPrice,"INR"));l(n,40,0,u)}))}function B(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.xb(1,0,null,null,3,"ion-slides",[["pager","true"]],null,null,null,r.Xb,r.T)),t.wb(2,49152,null,0,i.pb,[t.h,t.l,t.z],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),t.gb(16777216,null,0,1,null,S)),t.wb(4,278528,null,0,c.l,[t.P,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.slideOpt,"true"),l(n,4,0,n.context.ngIf)}),null)}function j(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Wb(-1,null,[" Loading offers.......\n"]))],null,null)}function K(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,12,"ion-card",[],null,null,null,r.ob,r.g)),t.wb(1,49152,null,0,i.n,[t.h,t.l,t.z],null,null),(l()(),t.xb(2,0,null,0,4,"ion-card-header",[],null,null,null,r.lb,r.i)),t.wb(3,49152,null,0,i.p,[t.h,t.l,t.z],null,null),(l()(),t.xb(4,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.mb,r.j)),t.wb(5,49152,null,0,i.q,[t.h,t.l,t.z],null,null),(l()(),t.Wb(-1,0,[" Special Offer Zone "])),(l()(),t.xb(7,0,null,0,5,"ion-card-content",[],null,null,null,r.kb,r.h)),t.wb(8,49152,null,0,i.o,[t.h,t.l,t.z],null,null),(l()(),t.gb(16777216,null,0,2,null,B)),t.wb(10,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Ob(131072,c.b,[t.h]),(l()(),t.gb(0,[["offerZoneLoader",2]],0,0,null,j))],(function(l,n){var u=n.component;l(n,10,0,t.Xb(n,10,0,t.Mb(n,11).transform(u.offerZoneProducts)),t.Mb(n,12))}),null)}function $(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function T(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function W(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.parent.context.$implicit.imageURL)}))}function A(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,0,"img",[["src","../../../assets/img/product_category.png"]],null,null,null,null,null))],null,null)}function F(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,14,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Mb(l,2).onClick()&&o),"click"===n&&(o=!1!==t.Mb(l,4).onClick(u)&&o),o}),r.ob,r.g)),t.wb(1,49152,null,0,i.n,[t.h,t.l,t.z],null,null),t.wb(2,16384,null,0,b.n,[b.m,b.a,[8,null],t.D,t.l],{routerLink:[0,"routerLink"]},null),t.Nb(3,4),t.wb(4,737280,null,0,i.Lb,[c.j,i.Gb,t.l,b.m,[2,b.n]],null,null),(l()(),t.gb(16777216,null,0,1,null,T)),t.wb(6,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"],ngIfElse:[2,"ngIfElse"]},null),(l()(),t.gb(0,[["customImage",2]],0,0,null,W)),(l()(),t.gb(0,[["defaultImage",2]],0,0,null,A)),(l()(),t.xb(9,0,null,0,5,"ion-row",[["class","cat-name"]],null,null,null,r.Qb,r.M)),t.wb(10,49152,null,0,i.hb,[t.h,t.l,t.z],null,null),(l()(),t.xb(11,0,null,0,3,"ion-col",[["align-self-center",""],["col-12",""],["text-center",""]],null,null,null,r.rb,r.n)),t.wb(12,49152,null,0,i.u,[t.h,t.l,t.z],null,null),(l()(),t.xb(13,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t.Wb(14,null,["",""]))],(function(l,n){var u=l(n,3,0,"/app/tabs/market/product-list",n.parent.context.$implicit.id,n.parent.context.$implicit.storeCode,n.parent.context.$implicit.name);l(n,2,0,u),l(n,4,0),l(n,6,0,null!=n.parent.context.$implicit.imageURL,t.Mb(n,7),t.Mb(n,8))}),(function(l,n){l(n,14,0,n.parent.context.$implicit.name)}))}function _(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,4,"ion-col",[["col-4",""],["size","4"]],null,null,null,r.rb,r.n)),t.wb(1,49152,null,0,i.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(l()(),t.gb(16777216,null,0,1,null,$)),t.wb(3,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"]},null),(l()(),t.gb(0,[["pccard",2]],0,0,null,F))],(function(l,n){l(n,1,0,"4"),l(n,3,0,null!=n.context.$implicit,t.Mb(n,4))}),null)}function J(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.xb(1,0,null,null,5,"ion-grid",[],null,null,null,r.yb,r.u)),t.wb(2,49152,null,0,i.B,[t.h,t.l,t.z],null,null),(l()(),t.xb(3,0,null,0,3,"ion-row",[],null,null,null,r.Qb,r.M)),t.wb(4,49152,null,0,i.hb,[t.h,t.l,t.z],null,null),(l()(),t.gb(16777216,null,0,1,null,_)),t.wb(6,278528,null,0,c.l,[t.P,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,6,0,n.context.ngIf)}),null)}function N(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,2,"div",[["class","spin"]],null,null,null,null,null)),(l()(),t.xb(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,r.Yb,r.U)),t.wb(2,49152,null,0,i.qb,[t.h,t.l,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"bubbles")}),null)}function Q(l){return t.Zb(0,[t.Ob(0,c.d,[t.u,t.k]),(l()(),t.xb(1,0,null,null,12,"ion-header",[],null,null,null,r.zb,r.v)),t.wb(2,49152,null,0,i.C,[t.h,t.l,t.z],null,null),(l()(),t.xb(3,0,null,0,10,"ion-toolbar",[["color","crimson"]],null,null,null,r.hc,r.db)),t.wb(4,49152,null,0,i.Ab,[t.h,t.l,t.z],{color:[0,"color"]},null),(l()(),t.xb(5,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,r.jb,r.f)),t.wb(6,49152,null,0,i.m,[t.h,t.l,t.z],null,null),(l()(),t.xb(7,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.backButton()&&t),t}),r.ib,r.e)),t.wb(8,49152,null,0,i.l,[t.h,t.l,t.z],null,null),(l()(),t.xb(9,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,null,null,r.Ab,r.w)),t.wb(10,49152,null,0,i.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.xb(11,0,null,0,2,"ion-title",[],null,null,null,r.fc,r.bb)),t.wb(12,49152,null,0,i.yb,[t.h,t.l,t.z],null,null),(l()(),t.Wb(13,0,[" Product Category :"," "])),(l()(),t.gb(16777216,null,null,1,null,C)),t.wb(15,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.xb(16,0,null,null,8,"ion-content",[["class","card-background-page"]],null,null,null,r.sb,r.o)),t.wb(17,49152,null,0,i.v,[t.h,t.l,t.z],null,null),(l()(),t.gb(16777216,null,0,1,null,K)),t.wb(19,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.xb(20,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,0,2,null,J)),t.wb(22,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Ob(131072,c.b,[t.h]),(l()(),t.gb(0,[["loadingErrorTemplate",2]],0,0,null,N))],(function(l,n){var u=n.component;l(n,4,0,"crimson"),l(n,10,0,"arrow-back"),l(n,15,0,u.basketDirect),l(n,19,0,u.isEnableForOfferZone),l(n,22,0,t.Xb(n,22,0,t.Mb(n,23).transform(u.productCatgeoryListObservable)),t.Mb(n,24))}),(function(l,n){l(n,13,0,n.component.shopName)}))}function R(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,1,"page-categoryList",[],null,null,null,Q,z)),t.wb(1,245760,null,0,I,[x,i.b,i.Db,s.a,v.a,i.Jb,i.Gb,b.a,k.a,t.h],null,null)],(function(l,n){l(n,1,0)}),null)}var V=t.tb("page-categoryList",I,R,{},{},[]),q=u("s7LF");class U{}var G=t.ub(o,[],(function(l){return t.Jb([t.Kb(512,t.j,t.Y,[[8,[e.a,V]],[3,t.j],t.x]),t.Kb(4608,c.o,c.n,[t.u]),t.Kb(4608,q.q,q.q,[]),t.Kb(4608,i.c,i.c,[t.z,t.g]),t.Kb(4608,i.Fb,i.Fb,[i.c,t.j,t.r]),t.Kb(4608,i.Kb,i.Kb,[i.c,t.j,t.r]),t.Kb(1073742336,c.c,c.c,[]),t.Kb(1073742336,q.p,q.p,[]),t.Kb(1073742336,q.e,q.e,[]),t.Kb(1073742336,i.Cb,i.Cb,[]),t.Kb(1073742336,b.q,b.q,[[2,b.v],[2,b.m]]),t.Kb(1073742336,U,U,[]),t.Kb(1073742336,o,o,[]),t.Kb(1024,b.k,(function(){return[[{path:"",component:I}]]}),[])])}))}}]);