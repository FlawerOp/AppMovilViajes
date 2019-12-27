import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LottieAnimationViewModule } from 'ng-lottie';

import {firebaseConfig } from '../environments/environment';
import { DescripcionPageModule } from "../app/pages/descripcion/descripcion.module";
import {AngularFireModule} from '@angular/fire'
import { AngularFireAuthModule} from '@angular/fire/auth'
//------------------------------------------------------------------
import { AngularFirestoreModule } from "angularfire2/firestore";
import { NgCalendarModule } from "ionic2-calendar";
import { CallNumber } from "@ionic-native/call-number/ngx";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,LottieAnimationViewModule.forRoot(),
     AngularFireModule.initializeApp(firebaseConfig), 
     AngularFireAuthModule,AngularFirestoreModule,
    NgCalendarModule,DescripcionPageModule ],
  providers: [
    StatusBar,
    CallNumber,
    SplashScreen,
    DescripcionPageModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
