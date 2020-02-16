import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MainService } from "../../servicios/main.service";
import { AuthService } from 'src/app/servicios/auth.service';
import { UserInterface } from '../../../app/models/user';
import { MenuController } from '@ionic/angular';
import * as firebase from "firebase/app";
//import * as FirebaseAdmin from "firebase-admin";
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  private arraynuevo: any[];
  uid;

  array: any;
  constructor(
    private loadingController: LoadingController,
    private mainService: MainService,
    private Router: Router,
    private toastController: ToastController,
    private authService: AuthService,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.mainService.getAllEventos().subscribe(res => {
      this.array = res;
      console.log(this.array);
    });

  this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
      }
    });
    console.log(name);
  
  /*  FirebaseAdmin.auth().getUser(this.uid).then(userRecord=>{
      console.log(userRecord.toJSON());
    }).catch(err=>{
      console.log(err);
    })
    */
  }
  
  openCustom() {
    this.menu.enable(true, 'main');
    this.menu.open('main');
  }
  atras() {
    this.menu.close('main');
  }

  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: '',
  };

  public providerId: string = 'null';

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
}

