(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-onboarding-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/onboarding.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/onboarding.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOnboardingOnboardingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n   es Pasajero?:{{isPasajero}} <br>\r\n   es Asesor?: {{isAsesor}}\r\n  \r\n    <ion-slides pager class=\"punticos\" *ngIf=\"isPasajero==true\">\r\n      <ion-slide>\r\n        <div class=\"diag\">\r\n          <ion-icon src=\"assets/mosque.svg\" color=\"primary\"></ion-icon>\r\n        </div>\r\n        <div class=\"texto\">\r\n\r\n          <h2>Tours</h2>\r\n          <p>Obten la informacion de todos tus tours programados.</p>\r\n          <p class=\"boton\" color=\"primary\" (click)=\"skip()\">Saltar</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"diag\">\r\n          <ion-icon src=\"assets/hotel.svg\" color=\"primary\"></ion-icon>\r\n        </div>\r\n        <div class=\"texto\">\r\n          <h2>Hoteles</h2>\r\n          <p>Conoce la informacion de tus hoteles.</p>\r\n          <p class=\"boton\" color=\"primary\" (click)=\"skip()\">Saltar</p>\r\n        </div>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <div class=\"diag\">\r\n          <ion-icon src=\"assets/consultant.svg\" color=\"primary\"></ion-icon>\r\n        </div>\r\n        <div class=\"texto\">\r\n          <h2>Asesor Turistico</h2>\r\n          <p>Contacta tu asesor turistico en cualquier momento</p>\r\n          <p class=\"boton\" color=\"primary\" (click)=\"skip()\">Entendido</p>\r\n\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n\r\n\r\n    <div *ngIf=\"isAsesor==true\">\r\n    <p>hola Asesor!</p>\r\n\r\n    <p>\r\n    Poner los slides de introduccion para el modulo de Asesores\r\n  </p>\r\n  \r\n</div>\r\n  \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/onboarding/onboarding-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/onboarding/onboarding-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: OnboardingPageRoutingModule */

  /***/
  function srcAppPagesOnboardingOnboardingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function () {
      return OnboardingPageRoutingModule;
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


    var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./onboarding.page */
    "./src/app/pages/onboarding/onboarding.page.ts");

    const routes = [{
      path: '',
      component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
    }];
    let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {};
    OnboardingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OnboardingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/onboarding/onboarding.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/onboarding/onboarding.module.ts ***!
    \*******************************************************/

  /*! exports provided: OnboardingPageModule */

  /***/
  function srcAppPagesOnboardingOnboardingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function () {
      return OnboardingPageModule;
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


    var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./onboarding-routing.module */
    "./src/app/pages/onboarding/onboarding-routing.module.ts");
    /* harmony import */


    var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./onboarding.page */
    "./src/app/pages/onboarding/onboarding.page.ts");

    let OnboardingPageModule = class OnboardingPageModule {};
    OnboardingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]],
      declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
    })], OnboardingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/onboarding/onboarding.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/onboarding/onboarding.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOnboardingOnboardingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #232323;\n}\n\n.diag {\n  margin-left: 20%;\n  width: 100%;\n  margin-top: -36%;\n  height: 66%;\n}\n\n.texto {\n  text-align: center;\n  position: relative;\n  right: 28%;\n  top: 18%;\n  width: 100%;\n}\n\n.boton {\n  margin-top: 86%;\n  text-align: center;\n  width: 100%;\n  color: #a2cc46;\n  margin-top: 100%;\n}\n\nion-icon {\n  height: 15em;\n  width: 8em;\n  position: relative;\n  left: 3.5em;\n}\n\nh2 {\n  font-weight: bold;\n  font-size: x-large;\n  text-align: center;\n  font-size: 20px;\n  color: #ffffff;\n}\n\np {\n  width: 10em;\n  color: #ffffff;\n  font-size: 19px;\n}\n\n.swiper-pagination-bullet-active {\n  background: #C400FF;\n}\n\n.swiper-pagination {\n  bottom: 50% !important;\n}\n\n.punticos {\n  background-color: #363636;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9EOlxccHJveWVjdG8gR3JlZW4gVHJhdmVsXFxBcHBNb3ZpbFZpYWplcy9zcmNcXGFwcFxccGFnZXNcXG9uYm9hcmRpbmdcXG9uYm9hcmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbn1cclxuXHJcbi5kaWFnIHtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC0zNiU7XHJcbiAgaGVpZ2h0OiA2NiU7XHJcbn1cclxuXHJcbi50ZXh0byB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMjglO1xyXG4gIHRvcDogMTglO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm90b257XHJcbiAgbWFyZ2luLXRvcDogODYlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2EyY2M0NjtcclxuICBtYXJnaW4tdG9wOiAxMDAlO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgaGVpZ2h0OiAxNWVtO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDMuNWVtO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbnAge1xyXG4gIHdpZHRoOiAxMGVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNDNDAwRkY7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgYm90dG9tOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wdW50aWNvcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICMyMzIzMjM7XG59XG5cbi5kaWFnIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC0zNiU7XG4gIGhlaWdodDogNjYlO1xufVxuXG4udGV4dG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDI4JTtcbiAgdG9wOiAxOCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm90b24ge1xuICBtYXJnaW4tdG9wOiA4NiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjYTJjYzQ2O1xuICBtYXJnaW4tdG9wOiAxMDAlO1xufVxuXG5pb24taWNvbiB7XG4gIGhlaWdodDogMTVlbTtcbiAgd2lkdGg6IDhlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzLjVlbTtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbnAge1xuICB3aWR0aDogMTBlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjQzQwMEZGO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBib3R0b206IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ucHVudGljb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/onboarding/onboarding.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/onboarding/onboarding.page.ts ***!
    \*****************************************************/

  /*! exports provided: OnboardingPage */

  /***/
  function srcAppPagesOnboardingOnboardingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingPage", function () {
      return OnboardingPage;
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
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");

    let OnboardingPage = class OnboardingPage {
      constructor(navCtrl, Router, authService) {
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.authService = authService;
        this.isPasajero = null;
        this.isAsesor = null;
        this.ciudad = null;
        this.userUid = null;
      }

      ngOnInit() {
        this.getCurrentUser();
      }

      skip() {
        this.Router.navigate(["/main"]);
      }

      getCurrentUser() {
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

    OnboardingPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }];

    OnboardingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-onboarding',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./onboarding.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/onboarding.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./onboarding.page.scss */
      "./src/app/pages/onboarding/onboarding.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], OnboardingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-onboarding-onboarding-module-es5.js.map