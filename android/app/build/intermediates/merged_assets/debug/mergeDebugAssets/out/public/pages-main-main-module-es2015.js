(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"main\" class=\"my-custom-menu\">\r\n  <ion-header class=\"menutop\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"botonmenu2\" (click)=\"atras()\">\r\n        <ion-icon class=\"icono2\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-header>\r\n  <ion-content class=\"menuback\">\r\n    <ion-card class=\"nombres\">\r\n      <ion-avatar class=\"avatare\">\r\n        <img src=\"../../assets/img/bandera.jpg\" />\r\n      </ion-avatar>\r\n      <h5>{{user.email}}</h5>\r\n      <p>{{ciudad}}</p>\r\n      <!--TODO traer la ciudad del pasajero (aunque es mejor si se muestra la ciudad donde \r\n      TODO se encuentre el pasajero en ese momento)-->\r\n    </ion-card>\r\n    <ion-list class=\"letraslista\">\r\n      <ion-item routerLink=\"/semana\">Itinerario <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/main\">Mi Itinerario <ion-icon name=\"sunny\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/conductores\">Mi Hotel <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/contacto-rapido\">Asesor Turistico<ion-icon name=\"call\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet main></ion-router-outlet>\r\n\r\n<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"botonmenu\" (click)=\"openCustom()\">\r\n        <ion-icon class=\"icono\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"dia_toolbar\">Mi Dia</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"botonmenu\" disabled>\r\n        <ion-icon class=\"icono\" name=\"\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-card *ngFor=\" let item of array\" (click)=\"esta(item.titulo,item.url,\r\nitem.duracion,item.descripcionCorta,item.descripcionLarga,item.incluye,item.no_incluye,item.recomendaciones)\">\r\n\r\n    <div class=\"imagenes\">\r\n      <img mat-card-image src=\"{{item.url}}\" />\r\n    </div>\r\n    <div class=\"cartas\">\r\n      <div class=\"titulo\" innerHtml=\"{{item.titulo}}\"></div>\r\n      <p class=\"p\" innerHtml=\"{{item.descripcionCorta}}\"></p>\r\n      <p class=\"p2\">Tiempo estimado: <b>2 Horas</b></p>\r\n      <br>\r\n    </div>\r\n\r\n  </ion-card>\r\n\r\n  \r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\"  class=\"botonFab\" color=\"danger\" >\r\n    <ion-fab-button routerLink=\"/contacto-rapido\" >\r\n      <ion-icon name=\"person\" position=\"end\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/main/main-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/main/main-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/pages/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");







let MainPageModule = class MainPageModule {
};
MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/pages/main/main.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\nion-content {\n  --background: #e0e0e0;\n}\n\n.titulo {\n  text-align: start;\n  width: 100%;\n  font-size: 16px;\n  font-weight: bold;\n  color: #232323;\n  text-align: start;\n  padding: 3%;\n  font-family: \"Segoe UI\";\n  margin-top: 8%;\n  margin-left: 2%;\n  margin-bottom: 2%;\n}\n\n.p {\n  margin-left: 5%;\n}\n\n.p2 {\n  margin-left: 5%;\n  color: #232323;\n}\n\nimg {\n  width: 250px;\n  height: 130px;\n}\n\n.cartas {\n  display: block;\n  width: 65%;\n}\n\n.dia_toolbar {\n  text-align: center;\n}\n\nion-toolbar {\n  --padding-bottom: 2%;\n}\n\nion-card {\n  --background: white;\n  margin-bottom: 0.5%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.imagenes {\n  width: 90px;\n  height: 130px;\n  margin-top: 8%;\n  margin-bottom: 8%;\n  border-radius: 10px;\n}\n\nion-card-title {\n  margin-left: 60%;\n  font-size: 20px;\n  text-align: center;\n  font-family: segoe ui;\n  font-weight: bold;\n}\n\nion-card-content {\n  margin-left: 56%;\n  position: relative;\n  bottom: 30%;\n}\n\n.icono {\n  font-size: 30px;\n}\n\n.botonmenu {\n  width: 50px;\n  height: 50px;\n  --border-radius: 50%;\n  border-radius: 50%;\n}\n\n.icono2 {\n  font-size: 30px;\n  color: #a2cc46;\n}\n\n.botonmenu2 {\n  width: 50px;\n  height: 50px;\n  --border-radius: 50%;\n  border-radius: 50%;\n  margin-left: 84%;\n}\n\n.menutop {\n  background: #232323;\n  box-shadow: none;\n}\n\n.menuback {\n  --background: #232323;\n  --border: none;\n}\n\n.letraslista {\n  background-color: #232323;\n  margin-top: 8%;\n}\n\n.letraslista ion-item {\n  --background: #232323;\n  --color: white;\n  font-size: 21px;\n  margin-top: 5%;\n}\n\n.letraslista ion-icon {\n  font-size: 40px;\n  color: white;\n  margin-left: 3%;\n  margin-right: 6%;\n}\n\n.nombres {\n  width: 100%;\n  height: 60px;\n  border-top-left-radius: 54px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 54px;\n  margin-left: 5%;\n}\n\n.nombres h5 {\n  margin-top: 3%;\n  margin-left: 5%;\n  color: #a2cc46;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.nombres p {\n  position: absolute;\n  top: 55%;\n  color: #232323;\n  font-size: 16px;\n  right: 45%;\n  font-weight: bold;\n}\n\n.nombres .avatare {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  top: 8%;\n  right: 82%;\n}\n\n.nombres .avatare img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.nombres .botonChat {\n  position: relative;\n  left: 50%;\n  --border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9EOlxccHJveWVjdG8gR3JlZW4gVHJhdmVsXFxBcHBNb3ZpbFZpYWplcy9zcmNcXGFwcFxccGFnZXNcXG1haW5cXG1haW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYWluL21haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREY7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDSkY7O0FET0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNKRjs7QURNRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSko7O0FETUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURPRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDUEo7O0FEU0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUE47O0FEV0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMyMzIzMjM7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSc7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ucCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4ucDIge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBjb2xvcjogIzIzMjMyMztcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuLmNhcnRhcyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDY1JTtcclxufVxyXG5cclxuLmRpYV90b29sYmFyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlbmVzIHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDglO1xyXG4gIG1hcmdpbi1ib3R0b206IDglO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBzZWdvZSB1aTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU2JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAzMCU7XHJcblxyXG59XHJcblxyXG4vL21lbnVcclxuXHJcbi5pY29ubyB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uYm90b25tZW51IHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaWNvbm8yIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICNhMmNjNDY7XHJcbn1cclxuXHJcbi5ib3Rvbm1lbnUyIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4NCU7XHJcbn1cclxuXHJcbi5tZW51dG9wIHtcclxuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51YmFjayB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gIC0tYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubGV0cmFzbGlzdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzIzMjMyMztcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2JTtcclxuICB9XHJcbn1cclxuXHJcbi5ub21icmVzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTRweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1NHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBjb2xvcjogI2EyY2M0NjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1JTtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDQ1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmF2YXRhcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0b3A6IDglO1xyXG4gICAgcmlnaHQ6IDgyJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm90b25DaGF0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxufSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xufVxuXG4udGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIzMjMyMztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHBhZGRpbmc6IDMlO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cblxuLnAge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5wMiB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgY29sb3I6ICMyMzIzMjM7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbn1cblxuLmNhcnRhcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjUlO1xufVxuXG4uZGlhX3Rvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZW5lcyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgbWFyZ2luLWJvdHRvbTogOCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzZWdvZSB1aTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogNTYlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMzAlO1xufVxuXG4uaWNvbm8ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5ib3Rvbm1lbnUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaWNvbm8yIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2EyY2M0Njtcbn1cblxuLmJvdG9ubWVudTIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogODQlO1xufVxuXG4ubWVudXRvcCB7XG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tZW51YmFjayB7XG4gIC0tYmFja2dyb3VuZDogIzIzMjMyMztcbiAgLS1ib3JkZXI6IG5vbmU7XG59XG5cbi5sZXRyYXNsaXN0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG4gIG1hcmdpbi10b3A6IDglO1xufVxuLmxldHJhc2xpc3RhIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5sZXRyYXNsaXN0YSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5ub21icmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1NHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG4ubm9tYnJlcyBoNSB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGNvbG9yOiAjYTJjYzQ2O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vbWJyZXMgcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NSU7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHJpZ2h0OiA0NSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vbWJyZXMgLmF2YXRhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiA4JTtcbiAgcmlnaHQ6IDgyJTtcbn1cbi5ub21icmVzIC5hdmF0YXJlIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5ub21icmVzIC5ib3RvbkNoYXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/main/main.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/main.service */ "./src/app/servicios/main.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");







//import * as FirebaseAdmin from "firebase-admin";
let MainPage = class MainPage {
    constructor(loadingController, mainService, Router, toastController, authService, menu) {
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
            email: ''
        };
        this.providerId = 'null';
    }
    ngOnInit() {
        this.mainService.getAllEventos().subscribe(res => {
            this.array = res;
            console.log(this.array);
        });
        this.authService.isAuth().subscribe(user => {
            if (user) {
                this.user.name = user.displayName;
                this.user.email = user.email;
                //this.user.photoUrl = user.photoURL;
            }
        });
        console.log(name);
        this.getCiudad();
    }
    openCustom() {
        this.menu.enable(true, 'main');
        this.menu.open('main');
    }
    atras() {
        this.menu.close('main');
    }
    esta(titulo, url, duracion, descripcionCorta, descripcionLarga, incluye, no_incluye, recomendaciones) {
        this.Router.navigate(["/descripcion/", titulo, url, duracion, descripcionCorta, descripcionLarga, incluye, no_incluye, recomendaciones]);
    }
    doRefresh(event) {
        this.ngOnInit();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 1500);
    }
    irAlChat() {
        this.Router.navigate(["/contacto-rapido"]);
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
MainPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/main/main.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], MainPage);



/***/ })

}]);
//# sourceMappingURL=pages-main-main-module-es2015.js.map