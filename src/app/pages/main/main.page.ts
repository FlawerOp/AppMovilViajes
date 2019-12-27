import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'
import {  ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MainService } from "../../servicios/main.service";
import { AuthService } from 'src/app/servicios/auth.service';
import { UserInterface } from '../../../app/models/user';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  array:any;
  constructor(
    private loadingController: LoadingController,
    private mainService:MainService,
    private Router: Router,
    private toastController : ToastController,
    private authService:AuthService,
    private menu: MenuController
    ){ }

  ngOnInit() {
   this.mainService.getAllEventos().subscribe(res=> {
     this.array=res;
     console.log(this.array);
  });

  this.authService.isAuth().subscribe(user => {
    if (user) {
console.log(user);
this.user.name = user.displayName;
this.user.email = user.email;
this.user.photoUrl = user.photoURL;
}
})
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
}
atras() {
    this.menu.close('custom');
}

  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: '',
  };

  public providerId: string = 'null';

  esta(titulo,url,duracion,descripcion,incluye,no_incluye,recomendaciones){

   this.Router.navigate(["/descripcion/",titulo,url,duracion,descripcion,incluye,no_incluye,recomendaciones]);
  }
}
 
