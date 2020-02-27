(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-guiasdesc-guiasdesc-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guiasdesc/guiasdesc.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guiasdesc/guiasdesc.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGuiasdescGuiasdescPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <ion-button routerLink=\"/guias\"class=\"botonatras\">\r\n      <ion-icon class=\"icono\" name=\"close\"></ion-icon>\r\n  </ion-button>\r\n\r\n  <div class=\"imagenes\">\r\n    <img id=\"imagenes\" mat-card-image src=\"{{foto}}\" />\r\n  </div>\r\n\r\n\r\n  <ion-card class=\"card\">\r\n\r\n    <ion-card-header>\r\n\r\n        <ion-icon name=\"person\"></ion-icon>\r\n        <ion-card-title class=\"titulos\">Guia</ion-card-title>\r\n        <ion-card-subtitle  innerHtml=\"{{nombre}}\"></ion-card-subtitle>\r\n     \r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <div class=\"titulos2\"> Descripcion:</div>\r\n      <div class=\"descripcion \">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore consectetur, debitis recusandae ipsa ratione ipsum provident facere assumenda, earum, tempore ea voluptatum quod libero eaque laboriosam neque minus omnis beatae? </div>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/guiasdesc/guiasdesc-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/guiasdesc/guiasdesc-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: GuiasdescPageRoutingModule */

  /***/
  function srcAppPagesGuiasdescGuiasdescRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuiasdescPageRoutingModule", function () {
      return GuiasdescPageRoutingModule;
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


    var _guiasdesc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guiasdesc.page */
    "./src/app/pages/guiasdesc/guiasdesc.page.ts");

    const routes = [{
      path: '',
      component: _guiasdesc_page__WEBPACK_IMPORTED_MODULE_3__["GuiasdescPage"]
    }];
    let GuiasdescPageRoutingModule = class GuiasdescPageRoutingModule {};
    GuiasdescPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GuiasdescPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/guiasdesc/guiasdesc.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/guiasdesc/guiasdesc.module.ts ***!
    \*****************************************************/

  /*! exports provided: GuiasdescPageModule */

  /***/
  function srcAppPagesGuiasdescGuiasdescModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuiasdescPageModule", function () {
      return GuiasdescPageModule;
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


    var _guiasdesc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guiasdesc-routing.module */
    "./src/app/pages/guiasdesc/guiasdesc-routing.module.ts");
    /* harmony import */


    var _guiasdesc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guiasdesc.page */
    "./src/app/pages/guiasdesc/guiasdesc.page.ts");

    let GuiasdescPageModule = class GuiasdescPageModule {};
    GuiasdescPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _guiasdesc_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuiasdescPageRoutingModule"]],
      declarations: [_guiasdesc_page__WEBPACK_IMPORTED_MODULE_6__["GuiasdescPage"]]
    })], GuiasdescPageModule);
    /***/
  },

  /***/
  "./src/app/pages/guiasdesc/guiasdesc.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/guiasdesc/guiasdesc.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGuiasdescGuiasdescPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  padding: 0%;\n  margin: 0%;\n}\n\n.botonatras {\n  position: absolute;\n  --background: white;\n  width: 35px;\n  height: 35px;\n  --border-radius: 50%;\n  left: 5%;\n  top: 3%;\n}\n\n.icono {\n  position: absolute;\n  font-size: 31px;\n  left: 7%;\n  color: #a2cc46;\n}\n\n.card {\n  width: 100%;\n  margin-top: -14%;\n  background: white;\n  border-radius: 54px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom: none;\n  height: auto;\n  box-shadow: none;\n}\n\n.titulos {\n  width: 80%;\n  margin-left: 20%;\n  margin-top: 8%;\n}\n\n.titulos2 {\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 6%;\n  font-weight: bold;\n  color: #232323;\n}\n\nion-card-subtitle {\n  width: 80%;\n  margin-left: 20%;\n  margin-top: 0%;\n  font-weight: bold;\n}\n\n.descripcion {\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 0%;\n  font-weight: bold;\n}\n\nion-icon {\n  position: absolute;\n  font-size: 25px;\n  left: 10%;\n  color: #a2cc46;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3VpYXNkZXNjL0Q6XFxwcm95ZWN0byBHcmVlbiBUcmF2ZWxcXEFwcE1vdmlsVmlhamVzL3NyY1xcYXBwXFxwYWdlc1xcZ3VpYXNkZXNjXFxndWlhc2Rlc2MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ndWlhc2Rlc2MvZ3VpYXNkZXNjLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ndWlhc2Rlc2MvZ3VpYXNkZXNjLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gIH1cclxuICBcclxuICAuYm90b25hdHJhcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgdG9wOiAzJTtcclxuICB9XHJcbiAgXHJcbiAgLmljb25ve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAzMXB4O1xyXG4gICAgbGVmdDogNyU7XHJcbiAgICBjb2xvcjogI2EyY2M0NjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTQlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXR1bG9zIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXR1bG9zMiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuZGVzY3JpcGNpb24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBjb2xvcjogI2EyY2M0NjtcclxuICB9IiwiKiB7XG4gIHBhZGRpbmc6IDAlO1xuICBtYXJnaW46IDAlO1xufVxuXG4uYm90b25hdHJhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxlZnQ6IDUlO1xuICB0b3A6IDMlO1xufVxuXG4uaWNvbm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgbGVmdDogNyU7XG4gIGNvbG9yOiAjYTJjYzQ2O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMTQlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnRpdHVsb3Mge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cblxuLnRpdHVsb3MyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogNiU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIzMjMyMztcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjcmlwY2lvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGVmdDogMTAlO1xuICBjb2xvcjogI2EyY2M0Njtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/guiasdesc/guiasdesc.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/guiasdesc/guiasdesc.page.ts ***!
    \***************************************************/

  /*! exports provided: GuiasdescPage */

  /***/
  function srcAppPagesGuiasdescGuiasdescPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuiasdescPage", function () {
      return GuiasdescPage;
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

    let GuiasdescPage = class GuiasdescPage {
      constructor(active) {
        this.active = active;
      }

      ngOnInit() {
        this.nombre = this.active.snapshot.paramMap.get("nombre");
        this.telefono = this.active.snapshot.paramMap.get("telefono");
        this.foto = this.active.snapshot.paramMap.get("foto");
      }

    };

    GuiasdescPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    GuiasdescPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-guiasdesc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./guiasdesc.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guiasdesc/guiasdesc.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./guiasdesc.page.scss */
      "./src/app/pages/guiasdesc/guiasdesc.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], GuiasdescPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-guiasdesc-guiasdesc-module-es5.js.map