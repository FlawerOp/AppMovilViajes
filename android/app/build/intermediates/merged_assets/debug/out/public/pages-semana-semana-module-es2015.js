(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-semana-semana-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/semana/semana.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/semana/semana.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"semana\" class=\"my-custom-menu\">\r\n  <ion-header class=\"menutop\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"botonmenu2\" (click)=\"atras()\">\r\n        <ion-icon class=\"icono2\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-header>\r\n  <ion-content class=\"menuback\">\r\n    <ion-card class=\"nombres\">\r\n      <ion-avatar class=\"avatare\">\r\n        <img src=\"../../assets/img/bandera.jpg\" />\r\n      </ion-avatar>\r\n      <h5>{{user.email}}</h5>\r\n      <p>{{ciudad}}</p>\r\n    </ion-card>\r\n    <ion-list class=\"letraslista\">\r\n      <ion-item routerLink=\"/semana\">Itinerario <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/main\">Mi Itinerario  <ion-icon name=\"sunny\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/conductores\">Mi Hotel <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/contacto-rapido\">Asesor Turistico<ion-icon name=\"call\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet main></ion-router-outlet>\r\n\r\n<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"botonmenu\" (click)=\"openCustom()\">\r\n        <ion-icon class=\"icono\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"dia_toolbar\">Mi Semana</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"today()\">\r\n        <ion-icon name=\"today\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n<ion-card>\r\n  <ion-title class=\"fecha\">\r\n    {{ viewTitle }}\r\n  </ion-title>\r\n  <ion-grid fixed class=\"login\">\r\n  <ion-row>\r\n    <ion-col size=\"2.4\" >\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <!-- Change the displayed calendar mode -->\r\n    <ion-col size=\"2.4\" size-md>\r\n      <ion-buttons  (click)=\"changeMode('month')\">\r\n        <ion-icon class=\"iconos\" [color]=\"calendar.mode == 'month' ? 'primary' : 'secondary'\" name=\"calendar\"></ion-icon>\r\n        <p>Month</p>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"2.4\" size-md>\r\n      <ion-buttons (click)=\"changeMode('week')\">\r\n        <ion-icon class=\"iconos\" [color]=\"calendar.mode == 'week' ? 'primary' : 'secondary'\" name=\"albums\"></ion-icon>\r\n        <p class=\"week\">Week</p>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"2.4\" size-md>\r\n      <ion-buttons (click)=\"changeMode('day')\">\r\n        <ion-icon class=\"iconos\" [color]=\"calendar.mode == 'day' ? 'primary' : 'secondary'\" name=\"apps\"></ion-icon>\r\n        <p class=\"dia\">Day</p>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"2.4\" >\r\n      <ion-button fill=\"clear\" (click)=\"next()\">\r\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</ion-card>\r\n\r\n<calendar class=\"calendario\"\r\n[eventSource]=\"eventSource\" \r\n[calendarMode]=\"calendar.mode\" \r\n[currentDate]=\"calendar.currentDate\"\r\n(onEventSelected)=\"onEventSelected($event)\"\r\n(onTitleChanged)=\"onViewTitleChanged($event)\"\r\n(onTimeSelected)=\"onTimeSelected($event)\" \r\nstartHour=\"6\"\r\nendHour=\"20\"\r\nstep=\"30\"\r\nstartingDayWeek=\"1\">\r\n</calendar>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button routerLink=\"/contacto-rapido\">\r\n    <ion-icon name=\"person\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/semana/semana-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/semana/semana-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SemanaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanaPageRoutingModule", function() { return SemanaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _semana_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./semana.page */ "./src/app/pages/semana/semana.page.ts");




const routes = [
    {
        path: '',
        component: _semana_page__WEBPACK_IMPORTED_MODULE_3__["SemanaPage"]
    }
];
let SemanaPageRoutingModule = class SemanaPageRoutingModule {
};
SemanaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SemanaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/semana/semana.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/semana/semana.module.ts ***!
  \***********************************************/
/*! exports provided: SemanaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanaPageModule", function() { return SemanaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _semana_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./semana-routing.module */ "./src/app/pages/semana/semana-routing.module.ts");
/* harmony import */ var _semana_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./semana.page */ "./src/app/pages/semana/semana.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








let SemanaPageModule = class SemanaPageModule {
};
SemanaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _semana_routing_module__WEBPACK_IMPORTED_MODULE_5__["SemanaPageRoutingModule"]
        ],
        declarations: [_semana_page__WEBPACK_IMPORTED_MODULE_6__["SemanaPage"]]
    })
], SemanaPageModule);



/***/ }),

/***/ "./src/app/pages/semana/semana.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/semana/semana.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\nion-content {\n  --background: #e0e0e0;\n}\n\n.titulo {\n  text-align: start;\n  width: 100%;\n  font-size: 16px;\n  font-weight: bold;\n  color: #232323;\n  text-align: start;\n  padding: 3%;\n  font-family: \"Segoe UI\";\n  margin-top: 8%;\n  margin-left: 2%;\n  margin-bottom: 2%;\n}\n\n.p {\n  margin-left: 5%;\n}\n\n.p2 {\n  margin-left: 5%;\n  color: #232323;\n}\n\nimg {\n  width: 250px;\n  height: 130px;\n}\n\n.cartas {\n  display: block;\n  width: 65%;\n}\n\n.dia_toolbar {\n  text-align: center;\n}\n\nion-toolbar {\n  --padding-bottom: 2%;\n}\n\n.imagenes {\n  width: 90px;\n  height: 130px;\n  margin-top: 8%;\n  margin-bottom: 8%;\n  border-radius: 10px;\n}\n\nion-card-title {\n  margin-left: 60%;\n  font-size: 20px;\n  text-align: center;\n  font-family: segoe ui;\n  font-weight: bold;\n}\n\nion-card-content {\n  margin-left: 56%;\n  position: relative;\n  bottom: 30%;\n}\n\nion-card {\n  --background: white;\n  margin-bottom: 0.5%;\n  margin-top: 1%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 10px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  height: auto;\n}\n\nion-col {\n  --ion-grid-column-padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 13%;\n  margin-top: 2%;\n}\n\n.iconos {\n  font-size: 38px;\n}\n\np {\n  position: absolute;\n  top: 92%;\n  text-align: center;\n}\n\n.week {\n  position: absolute;\n  left: 5%;\n}\n\n.dia {\n  position: absolute;\n  left: 20%;\n}\n\n.fecha {\n  position: absolute;\n  top: 70%;\n  width: 100%;\n  text-align: center;\n}\n\n.icono {\n  font-size: 30px;\n}\n\n.botonmenu {\n  width: 50px;\n  height: 50px;\n  --border-radius: 50%;\n  border-radius: 50%;\n}\n\n.icono2 {\n  font-size: 30px;\n  color: #a2cc46;\n}\n\n.botonmenu2 {\n  width: 50px;\n  height: 50px;\n  --border-radius: 50%;\n  border-radius: 50%;\n  margin-left: 84%;\n}\n\n.menutop {\n  background: #232323;\n  box-shadow: none;\n}\n\n.menuback {\n  --background: #232323;\n  --border: none;\n}\n\n.letraslista {\n  background-color: #232323;\n  margin-top: 8%;\n}\n\n.letraslista ion-item {\n  --background: #232323;\n  --color: white;\n  font-size: 21px;\n  margin-top: 5%;\n}\n\n.letraslista ion-icon {\n  font-size: 40px;\n  color: white;\n  margin-left: 3%;\n  margin-right: 6%;\n}\n\n.nombres {\n  width: 100%;\n  height: 60px;\n  border-top-left-radius: 54px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 54px;\n  margin-left: 5%;\n}\n\n.nombres h5 {\n  margin-top: 3%;\n  margin-left: 5%;\n  color: #a2cc46;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.nombres p {\n  position: absolute;\n  top: 55%;\n  color: #232323;\n  font-size: 16px;\n  right: 45%;\n  font-weight: bold;\n}\n\n.nombres .avatare {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  top: 8%;\n  right: 82%;\n}\n\n.nombres .avatare img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VtYW5hL0Q6XFxwcm95ZWN0byBHcmVlbiBUcmF2ZWxcXEFwcE1vdmlsVmlhamVzL3NyY1xcYXBwXFxwYWdlc1xcc2VtYW5hXFxzZW1hbmEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZW1hbmEvc2VtYW5hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURHQTtFQUNJLG9CQUFBO0FDQUo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRko7O0FEUUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTEo7O0FEUUE7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNMSjs7QURRQTtFQUNJLGVBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDTEo7O0FEVUE7RUFDSSxlQUFBO0FDUEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURVQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNQSjs7QURTSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDUFI7O0FEVUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1JSOztBRFlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNUSjs7QURXSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1RSOztBRFlJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNWUjs7QURhSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDWFI7O0FEYVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDWFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZW1hbmEvc2VtYW5hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4ucDIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG4uY2FydGFzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG5cclxuLmRpYV90b29sYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG5cclxuLmltYWdlbmVzIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzZWdvZSB1aTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDMwJTtcclxuXHJcbn1cclxuXHJcbi8vY2FsZW5kYXJpb1xyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTMlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5pY29ub3Mge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTIlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2VlayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1JTtcclxufVxyXG5cclxuLmRpYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5mZWNoYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vbWVudVxyXG5cclxuLmljb25vIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmJvdG9ubWVudSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaWNvbm8yIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjYTJjYzQ2O1xyXG59XHJcblxyXG4uYm90b25tZW51MiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg0JTtcclxufVxyXG5cclxuLm1lbnV0b3Age1xyXG4gICAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51YmFjayB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgICAtLWJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxldHJhc2xpc3RhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2JTtcclxuICAgIH1cclxufVxyXG5cclxuLm5vbWJyZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1NHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDU0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBjb2xvcjogI2EyY2M0NjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTUlO1xyXG4gICAgICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICByaWdodDogNDUlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdmF0YXJlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0b3A6IDglO1xyXG4gICAgICAgIHJpZ2h0OiA4MiU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2UwZTBlMDtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nOiAzJTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcbiAgbWFyZ2luLXRvcDogOCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5wIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ucDIge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGNvbG9yOiAjMjMyMzIzO1xufVxuXG5pbWcge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbi5jYXJ0YXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDY1JTtcbn1cblxuLmRpYV90b29sYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG4uaW1hZ2VuZXMge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luLXRvcDogOCU7XG4gIG1hcmdpbi1ib3R0b206IDglO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogc2Vnb2UgdWk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDU2JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDMwJTtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwLjUlO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1jb2wge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMyU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uaWNvbm9zIHtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuXG5wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDkyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VlayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG59XG5cbi5kaWEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwJTtcbn1cblxuLmZlY2hhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb25vIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYm90b25tZW51IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmljb25vMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNhMmNjNDY7XG59XG5cbi5ib3Rvbm1lbnUyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDg0JTtcbn1cblxuLm1lbnV0b3Age1xuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWVudWJhY2sge1xuICAtLWJhY2tncm91bmQ6ICMyMzIzMjM7XG4gIC0tYm9yZGVyOiBub25lO1xufVxuXG4ubGV0cmFzbGlzdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cbi5sZXRyYXNsaXN0YSBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzIzMjMyMztcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4ubGV0cmFzbGlzdGEgaW9uLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDYlO1xufVxuXG4ubm9tYnJlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDU0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTRweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLm5vbWJyZXMgaDUge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogI2EyY2M0NjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ub21icmVzIHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTUlO1xuICBjb2xvcjogIzIzMjMyMztcbiAgZm9udC1zaXplOiAxNnB4O1xuICByaWdodDogNDUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ub21icmVzIC5hdmF0YXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogOCU7XG4gIHJpZ2h0OiA4MiU7XG59XG4ubm9tYnJlcyAuYXZhdGFyZSBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/semana/semana.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/semana/semana.page.ts ***!
  \*********************************************/
/*! exports provided: SemanaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanaPage", function() { return SemanaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/main.service */ "./src/app/servicios/main.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");










let SemanaPage = class SemanaPage {
    constructor(loadingController, mainService, Router, toastController, authService, menu, alertCtrl, locale) {
        this.loadingController = loadingController;
        this.mainService = mainService;
        this.Router = Router;
        this.toastController = toastController;
        this.authService = authService;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.event = {
            title: '',
            descm: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
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
        this.resetEvent();
        this.mainService.getAllEventos().subscribe(res => {
            this.array = res;
            console.log(this.array);
        });
        this.authService.isAuth().subscribe(user => {
            if (user) {
                console.log(user);
                this.user.name = user.displayName;
                this.user.email = user.email;
                //   this.user.photoUrl = user.photoURL;
            }
        });
        this.getCiudad();
    }
    openCustom() {
        this.menu.enable(true, 'semana');
        this.menu.open('semana');
    }
    atras() {
        this.menu.close('semana');
    }
    resetEvent() {
        this.event = {
            title: '',
            descm: '',
            desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    }
    // Create the right event format and reload source
    next() {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    }
    back() {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    }
    // Change between month/week/day
    changeMode(mode) {
        this.calendar.mode = mode;
    }
    // Focus today
    today() {
        this.calendar.currentDate = new Date();
    }
    // Selected date reange and hence title changed
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    // Calendar event was clicked
    onEventSelected(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Use Angular date pipe for conversion
            let start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(event.startTime, 'medium', this.locale);
            let end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(event.endTime, 'medium', this.locale);
            const alert = yield this.alertCtrl.create({
                header: event.title,
                subHeader: event.desc,
                message: 'From: ' + start + '<br><br>To: ' + end,
                buttons: ['OK']
            });
            alert.present();
        });
    }
    // Time slot was clicked
    onTimeSelected(ev) {
        let selected = new Date(ev.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours() + 1);
        this.event.endTime = (selected.toISOString());
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
SemanaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"])
], SemanaPage.prototype, "myCal", void 0);
SemanaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semana',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semana.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/semana/semana.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semana.page.scss */ "./src/app/pages/semana/semana.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], String])
], SemanaPage);



/***/ })

}]);
//# sourceMappingURL=pages-semana-semana-module-es2015.js.map