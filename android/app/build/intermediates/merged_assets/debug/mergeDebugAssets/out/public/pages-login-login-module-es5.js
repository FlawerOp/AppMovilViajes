(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <img src=\"../../assets/img/usuario.png\" alt=\"\">\r\n\r\n  <ion-input shape=\"round\" fill=\"outline\" class=\"pasaporte\" [(ngModel)]=\"pasaporte\" placeholder=\"Pasaporte\"></ion-input>\r\n  <br>\r\n  <ion-input shape=\"round\" fill=\"outline\" class=\"pasaporte\" [(ngModel)]=\"password\" placeholder=\"Contraseña\"\r\n    type=\"password\"></ion-input>\r\n\r\n\r\n\r\n\r\n  <ion-item class=\"checkbox\">\r\n    <ion-label>No cerrar sesíon</ion-label>\r\n    <ion-checkbox checked slot=\"start\" color=\"dark\"></ion-checkbox>\r\n  </ion-item>\r\n\r\n\r\n  <ion-button checked (click)=\"Onsubmitlogin()\" strong=\"true\" fill=\"outline\" expand=\"block\" shape=\"round\" color=\"dark\">\r\n    ingresar\r\n  </ion-button>\r\n\r\n  <img class=\"img2\" src=\"../../assets/img/questionmark.png\" alt=\"\">\r\n  <p>¿Olvidaste la <br>contraseña?</p>\r\n\r\n  <!--separador-->\r\n\r\n  <!--TODO ARREGLAR EL METODO DE OLVIDASTE TU CONTRASEÑA-->\r\n  <!--TODO PONER LOS GUARDS-->\r\n\r\n  <!--separador final-->";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    const routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];
    let LoginPageRoutingModule = class LoginPageRoutingModule {};
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
    /* harmony import */


    var ng_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lottie */
    "./node_modules/ng-lottie/dist/esm/src/index.js");

    let LoginPageModule = class LoginPageModule {};
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieAnimationViewModule"].forRoot(), _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\nion-content {\n  --background: url(/../assets/img/w1.jpg) 100% 0/100% 100% no-repeat;\n}\n*/\nion-content {\n  --background: #363636;\n}\n.animation {\n  position: relative;\n  top: 1%;\n}\nimg {\n  width: 20%;\n  height: auto;\n  position: relative;\n  top: 5%;\n  margin-top: 53%;\n  margin-bottom: 0;\n  left: 43%;\n  color: #232323;\n}\n.img2 {\n  width: 8%;\n  height: auto;\n  position: relative;\n  top: 5%;\n  margin-top: 45%;\n  margin-bottom: 0;\n  left: 4%;\n  color: #232323;\n}\np {\n  color: #8f8f8f;\n  position: relative;\n  top: -6.7%;\n  left: 15%;\n  font-size: 12px;\n  width: 20%;\n}\n.pasaporte {\n  text-align: center;\n  background: white;\n  width: 65%;\n  height: 30px;\n  position: relative;\n  right: 62.5%;\n  left: 20%;\n  color: black;\n  top: 3%;\n  border-radius: 66px;\n}\n.checkbox {\n  padding: 0;\n  margin: 0;\n  --background: transparent;\n  width: 50%;\n  height: 40px;\n  position: relative;\n  top: 2%;\n  text-align: center;\n  left: 28%;\n  box-shadow: none;\n  text-shadow: none;\n  border: none;\n  text-decoration: none;\n  color: #232323;\n}\n.checkbox ion-label {\n  font-size: 12px;\n  text-align: start;\n}\nion-button {\n  text-align: center;\n  width: 65%;\n  height: 27px;\n  position: relative;\n  right: 62.5%;\n  left: 20%;\n  color: black;\n  top: 3%;\n  border-radius: 66px;\n  border-color: #232323;\n}\n.olvidaste {\n  height: 5%;\n  position: relative;\n  top: 32%;\n  left: 36%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXHByb3llY3RvIEdyZWVuIFRyYXZlbFxcQXBwTW92aWxWaWFqZXMvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQUtBO0VBQ0UscUJBQUE7QUNDRjtBRENBO0VBRUUsa0JBQUE7RUFDQSxPQUFBO0FDQ0Y7QURFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNDRjtBREdBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0FGO0FESUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0FDREY7QURLQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDRkY7QURJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FEUUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0xGO0FEUUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1nL3cxLmpwZykgMTAwJSAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuKi9cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogIzM2MzYzNjtcclxufVxyXG4uYW5pbWF0aW9uIHtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMSU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNSU7XHJcbiAgbWFyZ2luLXRvcDogNTMlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGVmdDogNDMlO1xyXG4gIGNvbG9yOiAjMjMyMzIzO1xyXG5cclxufVxyXG5cclxuLmltZzIge1xyXG4gIHdpZHRoOiA4JTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNSU7XHJcbiAgbWFyZ2luLXRvcDogNDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGVmdDogNCU7XHJcbiAgY29sb3I6ICMyMzIzMjM7XHJcblxyXG59XHJcblxyXG5we1xyXG4gIGNvbG9yOiByZ2IoMTQzLCAxNDMsIDE0Myk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTYuNyU7XHJcbiAgbGVmdDogMTUlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ucGFzYXBvcnRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiA2Mi41JTtcclxuICBsZWZ0OiAyMCU7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICB0b3A6IDMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDY2cHg7XHJcbn1cclxuIFxyXG5cclxuLmNoZWNrYm94IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6MiU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxlZnQ6IDI4JTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMyMzIzMjM7XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogNjIuNSU7XHJcbiAgbGVmdDogMjAlO1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgdG9wOiAzJTtcclxuICBib3JkZXItcmFkaXVzOiA2NnB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzIzMjMyMztcclxufVxyXG5cclxuLm9sdmlkYXN0ZSB7XHJcbiAgaGVpZ2h0OiA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMiU7XHJcbiAgbGVmdDogMzYlO1xyXG59IiwiLypcbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWcvdzEuanBnKSAxMDAlIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cbiovXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzM2MzYzNjtcbn1cblxuLmFuaW1hdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNSU7XG4gIG1hcmdpbi10b3A6IDUzJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGVmdDogNDMlO1xuICBjb2xvcjogIzIzMjMyMztcbn1cblxuLmltZzIge1xuICB3aWR0aDogOCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUlO1xuICBtYXJnaW4tdG9wOiA0NSU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxlZnQ6IDQlO1xuICBjb2xvcjogIzIzMjMyMztcbn1cblxucCB7XG4gIGNvbG9yOiAjOGY4ZjhmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTYuNyU7XG4gIGxlZnQ6IDE1JTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMjAlO1xufVxuXG4ucGFzYXBvcnRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA2Mi41JTtcbiAgbGVmdDogMjAlO1xuICBjb2xvcjogYmxhY2s7XG4gIHRvcDogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDY2cHg7XG59XG5cbi5jaGVja2JveCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogMjglO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjMyMzIzO1xufVxuLmNoZWNrYm94IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogMjdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNjIuNSU7XG4gIGxlZnQ6IDIwJTtcbiAgY29sb3I6IGJsYWNrO1xuICB0b3A6IDMlO1xuICBib3JkZXItcmFkaXVzOiA2NnB4O1xuICBib3JkZXItY29sb3I6ICMyMzIzMjM7XG59XG5cbi5vbHZpZGFzdGUge1xuICBoZWlnaHQ6IDUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzIlO1xuICBsZWZ0OiAzNiU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let LoginPage = class LoginPage {
      constructor(af, fs, authService, router, alertController, modalController) {
        this.af = af;
        this.fs = fs;
        this.authService = authService;
        this.router = router;
        this.alertController = alertController;
        this.modalController = modalController;
        this.isPasajero = null;
        this.isAsesor = null;
        this.ciudad = null;
        this.userUid = null;
        this.lottieConfig = {
          path: '../assets/1606profile.json',
          renderer: 'canvas',
          autoplay: true,
          loop: true
        };
      }

      ngOnInit() {}

      Onsubmitlogin() {
        this.authService.login(this.pasaporte, this.password).then(res => {
          localStorage.setItem('userid', this.pasaporte);
          this.getRol();

          if (this.isAsesor == true) {
            this.router.navigate(["/contacto-rapido"]);
          } else {
            if (this.isPasajero == true) {
              this.router.navigate(["/onboarding/"]);
              this.abrirAlertCambioConstraseña();
            }
          }
        }).catch(err => this.abrirAlertBadPassword());
      }

      abrirAlertBadPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var alert;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.alertController.create({
                  header: 'Error',
                  subHeader: 'Usuario o contraseña incorrectos',
                  message: 'Por favor verifique la informacion enviada por su agencia.',
                  buttons: ['OK']
                });

              case 2:
                alert = _context.sent;
                _context.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      abrirAlertCambioConstraseña() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var alert;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.alertController.create({
                  header: 'Bienvenido ' + this.pasaporte,
                  subHeader: 'por tu seguridad te recomendamos cambiar la clave actual',
                  message: '¿Deseas cambiar la contraseña ahora?',
                  buttons: [{
                    text: 'Quizas despues'
                  }, {
                    text: 'Actualizar contraseña',
                    handler: () => {
                      this.abrirCambioContrasena();
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
          }, _callee2, this);
        }));
      }

      abrirCambioContrasena() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var alert;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.alertController.create({
                  header: 'ingresa la nueva contraseña para' + this.pasaporte,
                  inputs: [{
                    name: 'newPassword',
                    type: 'password',
                    placeholder: "Ingresa la nueva contraseña"
                  }],
                  buttons: [{
                    text: "olvidalo"
                  }, {
                    text: "ActualizarContraseña",
                    handler: data => {
                      this.Newpassword = data.newPassword, console.log(this.Newpassword);
                      this.cambiarContrasena();
                    }
                  }]
                });

              case 2:
                alert = _context3.sent;
                _context3.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
      }

      cambiarContrasena() {}

      getRol() {
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

    LoginPage.ctorParameters = () => [{
      type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
    }, {
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
    }, {
      type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
    }];

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map