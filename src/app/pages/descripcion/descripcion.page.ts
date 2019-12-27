import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'
import {  ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { MainService } from "../../servicios/main.service";
import { AuthService } from 'src/app/servicios/auth.service';
import { MenuController } from '@ionic/angular';
import { UserInterface } from '../../../app/models/user';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
})

export class DescripcionPage implements OnInit {
  array:any;
  titulo;
  url;
  duracion;
  descripcion;
  incluye;
  no_incluye;
  recomendaciones;
  constructor(
    private loadingController: LoadingController,
    private Router: Router,
    private toastController : ToastController,
    private active: ActivatedRoute,
    private mainService:MainService,
    private menu: MenuController,
    private authService:AuthService,
    ){ }

    //FIXME el boton para abrir el menu no abre 
  ngOnInit() { 
//this.metodo();
    this.titulo=this.active.snapshot.paramMap.get("titulo");
    this.url=this.active.snapshot.paramMap.get("url");
    this.duracion=this.active.snapshot.paramMap.get("duracion");
  this.descripcion=this.active.snapshot.paramMap.get("descripcion");
  this.incluye=this.active.snapshot.paramMap.get("incluye");
  this.no_incluye=this.active.snapshot.paramMap.get("no_incluye");
  this.recomendaciones=this.active.snapshot.paramMap.get("recomendaciones");  

  this.authService.isAuth().subscribe(user => {
    if (user) {
console.log(user);
this.user.name = user.displayName;
this.user.email = user.email;
this.user.photoUrl = user.photoURL;
}
})
}
user: UserInterface = {
  name: '',
  email: '',
  photoUrl: '',
};

public providerId: string = 'null';
  /*metodo(){
    this.datos['id']=this.id;
    this.datos['descripcion']=this.descripcion;

  }*/

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
}
atras() {
    this.menu.close('custom');
}
}
