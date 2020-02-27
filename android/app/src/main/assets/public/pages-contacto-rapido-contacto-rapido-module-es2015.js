(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacto-rapido-contacto-rapido-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacto-rapido/contacto-rapido.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacto-rapido/contacto-rapido.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"op\" class=\"my-custom-menu\">\r\n  <ion-header class=\"menutop\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"botonmenu2\" (click)=\"atras()\">\r\n        <ion-icon class=\"icono2\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-header>\r\n  <ion-content class=\"menuback\">\r\n    <ion-card class=\"nombres\">\r\n      <ion-avatar class=\"avatare\">\r\n        <img src=\"../../assets/img/bandera.jpg\" />\r\n      </ion-avatar>\r\n      <h5>{{user.email}}</h5>\r\n      <p>{{ciudad}}</p>\r\n    </ion-card>\r\n    <ion-list class=\"letraslista\">\r\n      <ion-item routerLink=\"/semana\">Itinerario <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/main\">Mi Itinerario  <ion-icon name=\"sunny\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/conductores\">Mi Hotel <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/contacto-rapido\">Asesor Turistico<ion-icon name=\"call\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet main></ion-router-outlet>\r\n\r\n<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"botonmenu\" (click)=\"openCustom()\">\r\n        <ion-icon class=\"icono\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"dia_toolbar\">Asesor Turistico</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"botonmenu\" disabled>\r\n        <ion-icon class=\"icono\" name=\"\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-content>\r\n\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n  \r\n    <ion-card *ngFor=\"let item of array2\" (click)=\"esta(item.nombre,item.telefono)\">\r\n      <div class=\"imagenes\">\r\n        <img mat-card-image src=\"../../assets/img/ascs.png\" />\r\n      </div>\r\n  \r\n      <div class=\"cartas\">\r\n        <div class=\"titulo\" innerHtml=\"{{item.nombre}}\"></div>\r\n        <p class=\"p\">Telefono:</p>\r\n        <p class=\"p2\" innerHtml=\"{{item.telefono}}\"></p>\r\n      </div>\r\n      \r\n    </ion-card>\r\n  \r\n  </ion-content>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/contacto-rapido/contacto-rapido-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/contacto-rapido/contacto-rapido-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ContactoRapidoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoRapidoPageRoutingModule", function() { return ContactoRapidoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contacto_rapido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacto-rapido.page */ "./src/app/pages/contacto-rapido/contacto-rapido.page.ts");




const routes = [
    {
        path: '',
        component: _contacto_rapido_page__WEBPACK_IMPORTED_MODULE_3__["ContactoRapidoPage"]
    }
];
let ContactoRapidoPageRoutingModule = class ContactoRapidoPageRoutingModule {
};
ContactoRapidoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactoRapidoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/contacto-rapido/contacto-rapido.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/contacto-rapido/contacto-rapido.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContactoRapidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoRapidoPageModule", function() { return ContactoRapidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contacto_rapido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacto-rapido-routing.module */ "./src/app/pages/contacto-rapido/contacto-rapido-routing.module.ts");
/* harmony import */ var _contacto_rapido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacto-rapido.page */ "./src/app/pages/contacto-rapido/contacto-rapido.page.ts");







let ContactoRapidoPageModule = class ContactoRapidoPageModule {
};
ContactoRapidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contacto_rapido_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactoRapidoPageRoutingModule"]
        ],
        declarations: [_contacto_rapido_page__WEBPACK_IMPORTED_MODULE_6__["ContactoRapidoPage"]]
    })
], ContactoRapidoPageModule);



/***/ }),

/***/ "./src/app/pages/contacto-rapido/contacto-rapido.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/contacto-rapido/contacto-rapido.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\nion-content {\n  --background: #e0e0e0;\n}\n\n.titulo {\n  text-align: start;\n  width: 100%;\n  font-size: 20px;\n  font-weight: bold;\n  color: #232323;\n  text-align: start;\n  padding: 3%;\n  font-family: \"Segoe UI\";\n  margin-top: 15%;\n  margin-left: 10%;\n  margin-bottom: 1%;\n}\n\n.p {\n  margin-top: 5%;\n  margin-left: 13%;\n  margin-bottom: 1%;\n}\n\n.p2 {\n  margin-left: 13%;\n  color: #232323;\n}\n\nimg {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 2px solid #a2cc46;\n}\n\n.cartas {\n  display: block;\n  width: 65%;\n}\n\n.dia_toolbar {\n  text-align: center;\n}\n\nion-toolbar {\n  --padding-bottom: 2%;\n}\n\nion-card {\n  --background: white;\n  margin-bottom: 0.5%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.imagenes {\n  width: 130px;\n  height: 130px;\n  margin-top: 6%;\n  margin-bottom: 6%;\n  border-radius: 10px;\n  margin-left: 5%;\n}\n\nion-card-title {\n  margin-left: 60%;\n  font-size: 20px;\n  text-align: center;\n  font-family: segoe ui;\n  font-weight: bold;\n}\n\nion-card-content {\n  margin-left: 56%;\n  position: relative;\n  bottom: 30%;\n}\n\n.icono {\n  font-size: 30px;\n}\n\n.botonmenu {\n  width: 50px;\n  height: 50px;\n  --border-radius: 50%;\n  border-radius: 50%;\n}\n\n.icono2 {\n  font-size: 30px;\n  color: #a2cc46;\n}\n\n.botonmenu2 {\n  width: 50px;\n  height: 50px;\n  --border-radius: 50%;\n  border-radius: 50%;\n  margin-left: 84%;\n}\n\n.menutop {\n  background: #232323;\n  box-shadow: none;\n}\n\n.menuback {\n  --background: #232323;\n  --border: none;\n}\n\n.letraslista {\n  background-color: #232323;\n  margin-top: 8%;\n}\n\n.letraslista ion-item {\n  --background: #232323;\n  --color: white;\n  font-size: 21px;\n  margin-top: 5%;\n}\n\n.letraslista ion-icon {\n  font-size: 40px;\n  color: white;\n  margin-left: 3%;\n  margin-right: 6%;\n}\n\n.nombres {\n  width: 100%;\n  height: 60px;\n  border-top-left-radius: 54px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 54px;\n  margin-left: 5%;\n}\n\n.nombres h5 {\n  margin-top: 3%;\n  margin-left: 5%;\n  color: #a2cc46;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.nombres p {\n  position: absolute;\n  top: 55%;\n  color: #232323;\n  font-size: 16px;\n  right: 45%;\n  font-weight: bold;\n}\n\n.nombres .avatare {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  top: 8%;\n  right: 82%;\n}\n\n.nombres .avatare img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdG8tcmFwaWRvL0Q6XFxwcm95ZWN0byBHcmVlbiBUcmF2ZWxcXEFwcE1vdmlsVmlhamVzL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdG8tcmFwaWRvXFxjb250YWN0by1yYXBpZG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250YWN0by1yYXBpZG8vY29udGFjdG8tcmFwaWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxvQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREo7O0FET0E7RUFDSSxlQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNKSjs7QURNSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSlI7O0FET0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xSOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNOSjs7QURRSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05SOztBRFNJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNQUjs7QURVSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDUlI7O0FEVVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0by1yYXBpZG8vY29udGFjdG8tcmFwaWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknO1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG4ucCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLnAyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYTJjYzQ2O1xyXG59XHJcblxyXG4uY2FydGFzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG5cclxuLmRpYV90b29sYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlbmVzIHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDYlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogc2Vnb2UgdWk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTYlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAzMCU7XHJcblxyXG59XHJcblxyXG4vL21lbnVcclxuXHJcbi5pY29ubyB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5ib3Rvbm1lbnUge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmljb25vMiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI2EyY2M0NjtcclxufVxyXG5cclxuLmJvdG9ubWVudTIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NCU7XHJcbn1cclxuXHJcbi5tZW51dG9wIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubWVudWJhY2sge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gICAgLS1ib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5sZXRyYXNsaXN0YSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzIzMjMyMztcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub21icmVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTRweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1NHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgY29sb3I6ICNhMmNjNDY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDU1JTtcclxuICAgICAgICBjb2xvcjogIzIzMjMyMztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDQ1JTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuYXZhdGFyZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdG9wOiA4JTtcclxuICAgICAgICByaWdodDogODIlO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlMGUwZTA7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgcGFkZGluZzogMyU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbi5wIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiAxMyU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG4ucDIge1xuICBtYXJnaW4tbGVmdDogMTMlO1xuICBjb2xvcjogIzIzMjMyMztcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhMmNjNDY7XG59XG5cbi5jYXJ0YXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDY1JTtcbn1cblxuLmRpYV90b29sYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDAuNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1hZ2VuZXMge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbi10b3A6IDYlO1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogc2Vnb2UgdWk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDU2JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDMwJTtcbn1cblxuLmljb25vIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYm90b25tZW51IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmljb25vMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNhMmNjNDY7XG59XG5cbi5ib3Rvbm1lbnUyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDg0JTtcbn1cblxuLm1lbnV0b3Age1xuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWVudWJhY2sge1xuICAtLWJhY2tncm91bmQ6ICMyMzIzMjM7XG4gIC0tYm9yZGVyOiBub25lO1xufVxuXG4ubGV0cmFzbGlzdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cbi5sZXRyYXNsaXN0YSBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzIzMjMyMztcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4ubGV0cmFzbGlzdGEgaW9uLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDYlO1xufVxuXG4ubm9tYnJlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDU0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTRweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLm5vbWJyZXMgaDUge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogI2EyY2M0NjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ub21icmVzIHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTUlO1xuICBjb2xvcjogIzIzMjMyMztcbiAgZm9udC1zaXplOiAxNnB4O1xuICByaWdodDogNDUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ub21icmVzIC5hdmF0YXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogOCU7XG4gIHJpZ2h0OiA4MiU7XG59XG4ubm9tYnJlcyAuYXZhdGFyZSBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/contacto-rapido/contacto-rapido.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/contacto-rapido/contacto-rapido.page.ts ***!
  \***************************************************************/
/*! exports provided: ContactoRapidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoRapidoPage", function() { return ContactoRapidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/main.service */ "./src/app/servicios/main.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _servicios_guias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/guias.service */ "./src/app/servicios/guias.service.ts");








let ContactoRapidoPage = class ContactoRapidoPage {
    constructor(guiaService, loadingController, mainService, Router, toastController, authService, menu) {
        this.guiaService = guiaService;
        this.loadingController = loadingController;
        this.mainService = mainService;
        this.Router = Router;
        this.toastController = toastController;
        this.authService = authService;
        this.menu = menu;
        this.isPasajero = null;
        this.isAsesor = null;
        this.ciudad = null;
        this.userUid = null;
        this.user = {
            name: '',
            email: '',
        };
        this.providerId = 'null';
    }
    ngOnInit() {
        this.guiaService.getAllGuias().subscribe(res => this.array2 = res);
        this.mainService.getAllEventos().subscribe(res => {
            this.array = res;
            console.log(this.array);
        });
        this.authService.isAuth().subscribe(user => {
            if (user) {
                console.log(user);
                this.user.name = user.displayName;
                this.user.email = user.email;
                // this.user.photoUrl = user.photoURL;
            }
        });
        this.getCiudad();
    }
    openCustom() {
        this.menu.enable(true, 'op');
        this.menu.open('op');
    }
    atras() {
        this.menu.close('op');
    }
    esta(nombre, telefono) {
        this.Router.navigate(["/chat/", nombre, telefono]);
    }
    doRefresh(event) {
        this.ngOnInit();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 1500);
    }
    getCiudad() {
        this.authService.isAuth().subscribe(auth => {
            if (auth) {
                this.userUid = auth.uid;
                this.authService.isUserPasajero(this.userUid, this.ciudad)
                    .subscribe(userRole => {
                    console.warn(userRole);
                    this.isPasajero = userRole.Pasajero;
                    console.warn("resultado pasajero=" + this.isPasajero);
                    this.isAsesor = userRole.Asesor;
                    console.warn("resultado asesor=" + this.isAsesor);
                    this.ciudad = userRole.ciudad;
                    console.warn("la ciudad del pasajero es: " + this.ciudad);
                });
            }
        });
    }
};
ContactoRapidoPage.ctorParameters = () => [
    { type: _servicios_guias_service__WEBPACK_IMPORTED_MODULE_6__["GuiasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
ContactoRapidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacto-rapido',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacto-rapido.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacto-rapido/contacto-rapido.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacto-rapido.page.scss */ "./src/app/pages/contacto-rapido/contacto-rapido.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_guias_service__WEBPACK_IMPORTED_MODULE_6__["GuiasService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], ContactoRapidoPage);



/***/ })

}]);
//# sourceMappingURL=pages-contacto-rapido-contacto-rapido-module-es2015.js.map