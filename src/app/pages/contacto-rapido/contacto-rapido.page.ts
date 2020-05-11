import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { UserInterface } from '../../../app/models/user';
import { MenuController } from '@ionic/angular';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-contacto-rapido',
  templateUrl: './contacto-rapido.page.html',
  styleUrls: ['./contacto-rapido.page.scss'],
})
export class ContactoRapidoPage implements OnInit {
  array: any;
  array2: any;

  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad: any = null;
  public userUid: string = null;
  
  userNameFiltrado;
  nombreUsuario;
  idUsuarioActual;
  AsesorLocalStorage;
  AsesorDelUsuarioActual;
  
  constructor(

    private loadingController: LoadingController,
    private Router: Router,
    private toastController: ToastController,
    private authService: AuthService,
    private menu: MenuController,
    private afs: AngularFirestore,
    private aFauth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.nombreUsuario=localStorage.getItem('userid');
    localStorage.getItem('conductor asignado');
    localStorage.getItem('asesor asignado');
    this.AsesorLocalStorage=localStorage.getItem('asesor asignado');
    this.authService.isAuth().subscribe(user => {
      if (user) {
        console.log(user);
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.idUsuarioActual = user.uid;
        console.log(this.idUsuarioActual);
        // this.user.photoUrl = user.photoURL;
      }
    });
    this.getCiudad();
    this.ConsultarAsesorUsuarioActual();

  }

  openCustom() {
    this.menu.enable(true, 'op');
    this.menu.open('op');
  }
  atras() {
    this.menu.close('op');
  }

  user: UserInterface = {
    name: '',
    email: '',
  };

  public providerId: string = 'null';

  esta(userName, telefono) {
    this.Router.navigate(["/chat/",userName, telefono]);
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
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
          })
      }
    })
  }


  ConsultarAsesorUsuarioActual() {
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection("Asesores")
        .where("userName", "==", this.AsesorLocalStorage)
        .get().then(queryAsesorUsuario => {
          const arrayAsesorUsuarioActual = [];
          queryAsesorUsuario.forEach(function (docAsesor) {
            var objAsesor = JSON.parse(JSON.stringify(docAsesor.data()));
            objAsesor.id = docAsesor.id;
            arrayAsesorUsuarioActual.push(objAsesor);
          });
          if (arrayAsesorUsuarioActual.length > 0) {
            resolve(arrayAsesorUsuarioActual);
            this.AsesorDelUsuarioActual = arrayAsesorUsuarioActual;
            console.warn(this.AsesorDelUsuarioActual);
          }
          else {
            console.warn("esta mal la consulta");
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(null);
        })
    })
  }


  irCiudad(){
    this.Router.navigate(["/ciudad"]);
  }

}
