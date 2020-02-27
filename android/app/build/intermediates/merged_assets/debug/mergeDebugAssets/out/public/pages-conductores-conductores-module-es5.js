(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-conductores-conductores-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/google-maps/google-maps.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google-maps/google-maps.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGoogleMapsGoogleMapsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #map id=\"map\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/conductores/conductores.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/conductores/conductores.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConductoresConductoresPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu side=\"start\" menuId=\"cn\" class=\"my-custom-menu\">\r\n  <ion-header class=\"menutop\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"botonmenu2\" (click)=\"atras()\">\r\n        <ion-icon class=\"icono2\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-header>\r\n  <ion-content class=\"menuback\">\r\n    <ion-card class=\"nombres\">\r\n      <ion-avatar class=\"avatare\">\r\n        <img src=\"../../assets/img/bandera.jpg\" />\r\n      </ion-avatar>\r\n      <h5>{{user.email}}</h5>\r\n      <p>{{ciudad}}</p>\r\n    </ion-card>\r\n    <ion-list class=\"letraslista\">\r\n      <ion-item routerLink=\"/semana\">Itinerario <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/main\">Mi Itinerario  <ion-icon name=\"sunny\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/conductores\">Mi Hotel <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/contacto-rapido\">Asesor Turistico<ion-icon name=\"call\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet main></ion-router-outlet>\r\n\r\n<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"botonmenu\" (click)=\"openCustom()\">\r\n        <ion-icon class=\"icono\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"dia_toolbar\">Hotel</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"botonmenu\" disabled>\r\n        <ion-icon class=\"icono\" name=\"\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-google-maps></app-google-maps>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button routerLink=\"/contacto-rapido\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/google-maps/google-maps.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/google-maps/google-maps.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGoogleMapsGoogleMapsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlLW1hcHMvRDpcXHByb3llY3RvIEdyZWVuIFRyYXZlbFxcQXBwTW92aWxWaWFqZXMvc3JjXFxhcHBcXGdvb2dsZS1tYXBzXFxnb29nbGUtbWFwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ29vZ2xlLW1hcHMvZ29vZ2xlLW1hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9nb29nbGUtbWFwcy9nb29nbGUtbWFwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iLCIjbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/google-maps/google-maps.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/google-maps/google-maps.component.ts ***!
    \******************************************************/

  /*! exports provided: GoogleMapsComponent */

  /***/
  function srcAppGoogleMapsGoogleMapsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsComponent", function () {
      return GoogleMapsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let GoogleMapsComponent = class GoogleMapsComponent {
      constructor() {}

      ngOnInit() {
        this.ionViewDidLoad();
      }

      ionViewDidLoad() {
        /*  let coords = new google.maps.LatLng(4.7726686,-74.0440468);
                  this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 4.7726686, lng: -74.0440468},
            zoom: 8
          });
                  let marker: google.maps.Marker = new google.maps.Marker({
            map: this.map,
            position: coords
          });
          */
      }

    };
    GoogleMapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-google-maps',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./google-maps.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/google-maps/google-maps.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./google-maps.component.scss */
      "./src/app/google-maps/google-maps.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GoogleMapsComponent);
    /***/
  },

  /***/
  "./src/app/pages/conductores/conductores-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/conductores/conductores-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ConductoresPageRoutingModule */

  /***/
  function srcAppPagesConductoresConductoresRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConductoresPageRoutingModule", function () {
      return ConductoresPageRoutingModule;
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


    var _conductores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./conductores.page */
    "./src/app/pages/conductores/conductores.page.ts");

    const routes = [{
      path: '',
      component: _conductores_page__WEBPACK_IMPORTED_MODULE_3__["ConductoresPage"]
    }];
    let ConductoresPageRoutingModule = class ConductoresPageRoutingModule {};
    ConductoresPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConductoresPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/conductores/conductores.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/conductores/conductores.module.ts ***!
    \*********************************************************/

  /*! exports provided: ConductoresPageModule */

  /***/
  function srcAppPagesConductoresConductoresModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConductoresPageModule", function () {
      return ConductoresPageModule;
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
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _conductores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./conductores-routing.module */
    "./src/app/pages/conductores/conductores-routing.module.ts");
    /* harmony import */


    var _conductores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./conductores.page */
    "./src/app/pages/conductores/conductores.page.ts");
    /* harmony import */


    var _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../google-maps/google-maps.component */
    "./src/app/google-maps/google-maps.component.ts");

    let ConductoresPageModule = class ConductoresPageModule {};
    ConductoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _conductores_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConductoresPageRoutingModule"]],
      declarations: [_conductores_page__WEBPACK_IMPORTED_MODULE_6__["ConductoresPage"], _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsComponent"]]
    })], ConductoresPageModule);
    /***/
  },

  /***/
  "./src/app/pages/conductores/conductores.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/conductores/conductores.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConductoresConductoresPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n}\n\nion-content {\n  --background: #e0e0e0;\n}\n\n.titulo {\n  text-align: start;\n  width: 100%;\n  font-size: 20px;\n  font-weight: bold;\n  color: #232323;\n  text-align: start;\n  padding: 3%;\n  font-family: \"Segoe UI\";\n  margin-top: 15%;\n  margin-left: 10%;\n  margin-bottom: 1%;\n}\n\n.p {\n  margin-top: 5%;\n  margin-left: 13%;\n  margin-bottom: 1%;\n}\n\n.p2 {\n  margin-left: 13%;\n  color: #232323;\n}\n\nimg {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 2px solid #a2cc46;\n}\n\n.cartas {\n  display: block;\n  width: 65%;\n}\n\n.dia_toolbar {\n  text-align: center;\n}\n\nion-toolbar {\n  --padding-bottom: 2%;\n}\n\nion-card {\n  --background: white;\n  margin-bottom: 0.5%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.imagenes {\n  width: 130px;\n  height: 130px;\n  margin-top: 6%;\n  margin-bottom: 6%;\n  border-radius: 10px;\n  margin-left: 5%;\n}\n\nion-card-title {\n  margin-left: 60%;\n  font-size: 20px;\n  text-align: center;\n  font-family: segoe ui;\n  font-weight: bold;\n}\n\nion-card-content {\n  margin-left: 56%;\n  position: relative;\n  bottom: 30%;\n}\n\n.icono {\n  font-size: 30px;\n}\n\n.botonmenu {\n  width: 50px;\n  height: 50px;\n  --border-radius: 50%;\n  border-radius: 50%;\n}\n\n.icono2 {\n  font-size: 30px;\n  color: #a2cc46;\n}\n\n.botonmenu2 {\n  width: 50px;\n  height: 50px;\n  --border-radius: 50%;\n  border-radius: 50%;\n  margin-left: 84%;\n}\n\n.menutop {\n  background: #232323;\n  box-shadow: none;\n}\n\n.menuback {\n  --background: #232323;\n  --border: none;\n}\n\n.letraslista {\n  background-color: #232323;\n  margin-top: 8%;\n}\n\n.letraslista ion-item {\n  --background: #232323;\n  --color: white;\n  font-size: 21px;\n  margin-top: 5%;\n}\n\n.letraslista ion-icon {\n  font-size: 40px;\n  color: white;\n  margin-left: 3%;\n  margin-right: 6%;\n}\n\n.nombres {\n  width: 100%;\n  height: 60px;\n  border-top-left-radius: 54px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 54px;\n  margin-left: 5%;\n}\n\n.nombres h5 {\n  margin-top: 3%;\n  margin-left: 5%;\n  color: #a2cc46;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.nombres p {\n  position: absolute;\n  top: 55%;\n  color: #232323;\n  font-size: 16px;\n  right: 45%;\n  font-weight: bold;\n}\n\n.nombres .avatare {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  top: 8%;\n  right: 82%;\n}\n\n.nombres .avatare img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZHVjdG9yZXMvRDpcXHByb3llY3RvIEdyZWVuIFRyYXZlbFxcQXBwTW92aWxWaWFqZXMvc3JjXFxhcHBcXHBhZ2VzXFxjb25kdWN0b3Jlc1xcY29uZHVjdG9yZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25kdWN0b3Jlcy9jb25kdWN0b3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksb0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDSko7O0FETUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0pSOztBRE9JO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMUjs7QURTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDTko7O0FEUUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOUjs7QURTSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDUFI7O0FEVUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ1JSOztBRFVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1JaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZHVjdG9yZXMvY29uZHVjdG9yZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSc7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi5wIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG4ucDIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzJTtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhMmNjNDY7XHJcbn1cclxuXHJcbi5jYXJ0YXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNjUlO1xyXG59XHJcblxyXG4uZGlhX3Rvb2xiYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2VuZXMge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzZWdvZSB1aTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDMwJTtcclxuXHJcbn1cclxuXHJcbi8vbWVudVxyXG5cclxuLmljb25vIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmJvdG9ubWVudSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaWNvbm8yIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjYTJjYzQ2O1xyXG59XHJcblxyXG4uYm90b25tZW51MiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg0JTtcclxufVxyXG5cclxuLm1lbnV0b3Age1xyXG4gICAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51YmFjayB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgICAtLWJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxldHJhc2xpc3RhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2JTtcclxuICAgIH1cclxufVxyXG5cclxuLm5vbWJyZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1NHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDU0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBjb2xvcjogI2EyY2M0NjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTUlO1xyXG4gICAgICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICByaWdodDogNDUlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdmF0YXJlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0b3A6IDglO1xyXG4gICAgICAgIHJpZ2h0OiA4MiU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2UwZTBlMDtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nOiAzJTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuLnAge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbi5wMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMyU7XG4gIGNvbG9yOiAjMjMyMzIzO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2EyY2M0Njtcbn1cblxuLmNhcnRhcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjUlO1xufVxuXG4uZGlhX3Rvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZW5lcyB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luLXRvcDogNiU7XG4gIG1hcmdpbi1ib3R0b206IDYlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzZWdvZSB1aTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogNTYlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMzAlO1xufVxuXG4uaWNvbm8ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5ib3Rvbm1lbnUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaWNvbm8yIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2EyY2M0Njtcbn1cblxuLmJvdG9ubWVudTIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogODQlO1xufVxuXG4ubWVudXRvcCB7XG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tZW51YmFjayB7XG4gIC0tYmFja2dyb3VuZDogIzIzMjMyMztcbiAgLS1ib3JkZXI6IG5vbmU7XG59XG5cbi5sZXRyYXNsaXN0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG4gIG1hcmdpbi10b3A6IDglO1xufVxuLmxldHJhc2xpc3RhIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjMyMzIzO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5sZXRyYXNsaXN0YSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5ub21icmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1NHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG4ubm9tYnJlcyBoNSB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGNvbG9yOiAjYTJjYzQ2O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vbWJyZXMgcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NSU7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHJpZ2h0OiA0NSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vbWJyZXMgLmF2YXRhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiA4JTtcbiAgcmlnaHQ6IDgyJTtcbn1cbi5ub21icmVzIC5hdmF0YXJlIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/conductores/conductores.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/conductores/conductores.page.ts ***!
    \*******************************************************/

  /*! exports provided: ConductoresPage */

  /***/
  function srcAppPagesConductoresConductoresPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConductoresPage", function () {
      return ConductoresPage;
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
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../servicios/main.service */
    "./src/app/servicios/main.service.ts");
    /* harmony import */


    var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _servicios_guias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../servicios/guias.service */
    "./src/app/servicios/guias.service.ts");

    let ConductoresPage = class ConductoresPage {
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
          userName: '',
          ciudad: ''
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
            this.user.email = user.email; // this.user.ciudad = user.ciudad;
          }
        });
        this.getCiudad();
      } //TODO: traer los resultados de la base de datos aunas variables para que se muestren en el sidemu 


      openCustom() {
        this.menu.enable(true, 'cn');
        this.menu.open('cn');
      }

      atras() {
        this.menu.close('cn');
      }

      getCiudad() {
        this.authService.isAuth().subscribe(auth => {
          if (auth) {
            this.userUid = auth.uid;
            this.authService.isUserPasajero(this.userUid, this.ciudad).subscribe(userRole => {
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

    ConductoresPage.ctorParameters = () => [{
      type: _servicios_guias_service__WEBPACK_IMPORTED_MODULE_6__["GuiasService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }];

    ConductoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conductores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conductores.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/conductores/conductores.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conductores.page.scss */
      "./src/app/pages/conductores/conductores.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_guias_service__WEBPACK_IMPORTED_MODULE_6__["GuiasService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _servicios_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], ConductoresPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-conductores-conductores-module-es5.js.map