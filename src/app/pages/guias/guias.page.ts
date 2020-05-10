import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MainService } from "../../servicios/main.service";
import { AuthService } from 'src/app/servicios/auth.service';
import { UserInterface } from '../../../app/models/user';
import { GuiasService } from "../../servicios/guias.service";
import { MenuController } from '@ionic/angular';
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: 'app-guias',
  templateUrl: './guias.page.html',
  styleUrls: ['./guias.page.scss'],
})
export class GuiasPage implements OnInit {


  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad: any = null;
  public userUid: string = null;


  idUsuarioActual;
  GuiaLocalStorage;
  GuiaUsuarioActual; 
  user: UserInterface = {
    name: "",
    email: ""
  };


  constructor(
    private guiaService: GuiasService,
    private loadingController: LoadingController,
    private mainService: MainService,
    private Router: Router,
    private toastController: ToastController,
    private authService: AuthService,
    private afs: AngularFirestore,
    private menu: MenuController) { }

  ngOnInit() {
    localStorage.getItem('guia asignado');
    this.GuiaLocalStorage=localStorage.getItem('guia asignado');
    this.authService.isAuth().subscribe(user => {
      if (user) {
        console.log(user);
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.idUsuarioActual = user.uid;
        console.log(this.idUsuarioActual);
      }
    });
    this.getCiudad();
    this.ConsultarInfoGuiaUsuarioActual();

  }

  openCustom() {
    this.menu.enable(true, 'guias');
    this.menu.open('guias');
  }
  atras() {
    this.menu.close('guias');
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }

  esta(nombre, telefono, foto) {
    this.Router.navigate(["/guiasdesc/", nombre, telefono, foto]);
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

  ConsultarInfoGuiaUsuarioActual() {
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection("guias")
        .where("nombre", "==", this.GuiaLocalStorage)
        .get()
        .then(queryGuiaUsuario => {
          const arrayGuiaUsuarioActual = [];
          queryGuiaUsuario.forEach(function (docGuias) {
            var objGuias = JSON.parse(JSON.stringify(docGuias.data()));
            objGuias.id = docGuias.id;
            arrayGuiaUsuarioActual.push(objGuias);
          });

          if (arrayGuiaUsuarioActual.length > 0) {
            resolve(arrayGuiaUsuarioActual);
            this.GuiaUsuarioActual = arrayGuiaUsuarioActual;
            console.warn("la info completa del guia asignado es:");
            console.warn(this.GuiaUsuarioActual);
          }
          else {
            console.warn("la consulta del guia esta mal");
            reject(null);
          }

        });
    });

  }


}
