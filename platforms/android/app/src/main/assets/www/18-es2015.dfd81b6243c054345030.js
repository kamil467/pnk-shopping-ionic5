(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"8k80":function(l,n,u){"use strict";u.r(n),u.d(n,"AccountModuleNgFactory",(function(){return x}));var t=u("8Y7J");class e{}var o=u("pMnS"),r=u("MKJQ"),a=u("sZkV"),c=u("SVse"),i=u("mrSG"),b=u("X+KH");class s{constructor(l,n,u){this.alertCtrl=l,this.router=n,this.userData=u}ngAfterViewInit(){this.getUsername()}updatePicture(){console.log("Clicked to update picture")}changeUsername(){return Object(i.b)(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Change Username",buttons:["Cancel",{text:"Ok",handler:l=>{this.userData.setUsername(l.username),this.getUsername()}}],inputs:[{type:"text",name:"username",value:this.username,placeholder:"username"}]});yield l.present()}))}getUsername(){this.userData.getUsername().then(l=>{this.username=l})}changePassword(){console.log("Clicked to change password")}logout(){this.userData.logout(),this.router.navigateByUrl("/login")}support(){this.router.navigateByUrl("/support")}}var h=u("iInd"),m=t.vb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}"]],data:{}});function p(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,20,"div",[["class","ion-padding-top ion-text-center"]],null,null,null,null,null)),(l()(),t.xb(1,0,null,null,0,"img",[["alt","avatar"],["src","https://www.gravatar.com/avatar?d=mm&s=140"]],null,null,null,null,null)),(l()(),t.xb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Wb(3,null,["",""])),(l()(),t.xb(4,0,null,null,16,"ion-list",[["inset",""]],null,null,null,r.Kb,r.F)),t.wb(5,49152,null,0,a.P,[t.h,t.l,t.z],{inset:[0,"inset"]},null),(l()(),t.xb(6,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updatePicture()&&t),t}),r.Hb,r.y)),t.wb(7,49152,null,0,a.I,[t.h,t.l,t.z],null,null),(l()(),t.Wb(-1,0,["Update Picture"])),(l()(),t.xb(9,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeUsername()&&t),t}),r.Hb,r.y)),t.wb(10,49152,null,0,a.I,[t.h,t.l,t.z],null,null),(l()(),t.Wb(-1,0,["Change Username"])),(l()(),t.xb(12,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changePassword()&&t),t}),r.Hb,r.y)),t.wb(13,49152,null,0,a.I,[t.h,t.l,t.z],null,null),(l()(),t.Wb(-1,0,["Change Password"])),(l()(),t.xb(15,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.support()&&t),t}),r.Hb,r.y)),t.wb(16,49152,null,0,a.I,[t.h,t.l,t.z],null,null),(l()(),t.Wb(-1,0,["Support"])),(l()(),t.xb(18,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t}),r.Hb,r.y)),t.wb(19,49152,null,0,a.I,[t.h,t.l,t.z],null,null),(l()(),t.Wb(-1,0,["Logout"]))],(function(l,n){l(n,5,0,"")}),(function(l,n){l(n,3,0,n.component.username)}))}function g(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,10,"ion-header",[],null,null,null,r.zb,r.v)),t.wb(1,49152,null,0,a.C,[t.h,t.l,t.z],null,null),(l()(),t.xb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.hc,r.db)),t.wb(3,49152,null,0,a.Ab,[t.h,t.l,t.z],null,null),(l()(),t.xb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.jb,r.f)),t.wb(5,49152,null,0,a.m,[t.h,t.l,t.z],null,null),(l()(),t.xb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.Lb,r.I)),t.wb(7,49152,null,0,a.S,[t.h,t.l,t.z],null,null),(l()(),t.xb(8,0,null,0,2,"ion-title",[],null,null,null,r.fc,r.bb)),t.wb(9,49152,null,0,a.yb,[t.h,t.l,t.z],null,null),(l()(),t.Wb(-1,0,["Account"])),(l()(),t.xb(11,0,null,null,3,"ion-content",[],null,null,null,r.sb,r.o)),t.wb(12,49152,null,0,a.v,[t.h,t.l,t.z],null,null),(l()(),t.gb(16777216,null,0,1,null,p)),t.wb(14,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,14,0,n.component.username)}),null)}function d(l){return t.Zb(0,[(l()(),t.xb(0,0,null,null,1,"page-account",[],null,null,null,g,m)),t.wb(1,4243456,null,0,s,[a.b,h.m,b.a],null,null)],null,null)}var w=t.tb("page-account",s,d,{},{},[]);class v{}var x=t.ub(e,[],(function(l){return t.Jb([t.Kb(512,t.j,t.Y,[[8,[o.a,w]],[3,t.j],t.x]),t.Kb(4608,c.o,c.n,[t.u]),t.Kb(4608,a.c,a.c,[t.z,t.g]),t.Kb(4608,a.Fb,a.Fb,[a.c,t.j,t.r]),t.Kb(4608,a.Kb,a.Kb,[a.c,t.j,t.r]),t.Kb(1073742336,c.c,c.c,[]),t.Kb(1073742336,a.Cb,a.Cb,[]),t.Kb(1073742336,h.q,h.q,[[2,h.v],[2,h.m]]),t.Kb(1073742336,v,v,[]),t.Kb(1073742336,e,e,[]),t.Kb(1024,h.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);