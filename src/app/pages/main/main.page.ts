import { Component, OnInit } from "@angular/core";
import { ToastController, LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { MainService } from "../../servicios/main.service";
import { AuthService } from "src/app/servicios/auth.service";
import { UserInterface } from "../../../app/models/user";
import { MenuController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { auth } from "firebase";
import { Subject } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"]
})


export class MainPage implements OnInit {
  private arraynuevo: any[];
  uid;
  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad: any = null;
  public userUid: string = null;

  array: any;
  arrayItinerarios: any;
  idUsuarioActual;
  userNameFiltrado;

  grupoFiltradoUsuarioActual;
  eventosAsignados;
  hotelAsignado;
  asesorAsignado;
  conductorAsignado;
  guiaAsignado;



  user: UserInterface = {
    name: "",
    email: ""
  };

  constructor(
    private loadingController: LoadingController,
    private mainService: MainService,
    private Router: Router,
    private toastController: ToastController,
    private authService: AuthService,
    private menu: MenuController,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private afs: AngularFirestore,
    private aFauth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.userNameFiltrado = localStorage.getItem('userid');
    console.log(this.userNameFiltrado);

    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.idUsuarioActual = user.uid;
      }
    });
    this.getCiudad();
 
  }

  openCustom() {
    this.menu.enable(true, "main");
    this.menu.open("main");
  }
  atras() {
    this.menu.close("main");
  }

  public providerId: string = "null";

  esta(titulo, url, duracion, descripcion, incluye, no_incluye, recomendaciones) {
    this.Router.navigate(["/descripcion/", titulo,url,duracion,descripcion,
      incluye,
      no_incluye,
      recomendaciones,
    ]);
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1500);
  }

  irAlChat() {
    this.Router.navigate(["/contacto-rapido"]);
  }

  async abrirModalSinGrupoOItinerario() {
    const alert = await this.alertController.create({
      header: 'lo sentimos,',
      subHeader: 'No han asignado Tours para ti',
      message: 'por favor comunicate con tu asesor.',
    });

    await alert.present();
  }

  async abrirModalSeccionAyuda() {
    const alert = await this.alertController.create({
      header: "Bienvenido a la seccion de ayuda",
      subHeader:
        "aqui podras contactarte con tu asesor turistico en caso de tener problemas, dudas, felicitaciones, o cualquier otra cosa que necesites...",
      message: "simplemente haz click en tu asesor y escribe lo que necesites",
      buttons: [
        {
          text: "Ok, llevame allí",
          handler: () => {
            this.irAlChat();
          }
        }
      ]
    });
    await alert.present();
  }

  getCiudad() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        console.log(this.userUid)
        this.authService
          .isUserPasajero(this.userUid, this.ciudad)
          .subscribe(userRole => {
            this.isPasajero = userRole.Pasajero;
            console.log("resultado pasajero=" + this.isPasajero);
            this.isAsesor = userRole.Asesor;
            console.log("resultado asesor=" + this.isAsesor);
            this.ciudad = userRole.ciudad;
            console.log("la ciudad del pasajero es: " + this.ciudad);
          });
      }
    });
    return new Promise((resolve, reject) => {
      this.afs.firestore
        .collection("grupos")
        .where("usuarios_grupo", "array-contains", this.userNameFiltrado) //donde dice pasajero debe decir this.userNameFiltrado
        .get()
        .then(queryGrupos => {
          const arrayGrupoUsuarioActual = [];
          queryGrupos.forEach(function (docGrupo) {
            var objGrupos = JSON.parse(JSON.stringify(docGrupo.data()));
            objGrupos.id = docGrupo.id;
            arrayGrupoUsuarioActual.push(objGrupos);
          });
          if (arrayGrupoUsuarioActual.length > 0) {
            resolve(arrayGrupoUsuarioActual);
            this.grupoFiltradoUsuarioActual = arrayGrupoUsuarioActual;
            console.log(this.grupoFiltradoUsuarioActual);
            this.eventosAsignados = this.grupoFiltradoUsuarioActual[0].itinerarioAsignado.eventos;
            this.hotelAsignado = this.grupoFiltradoUsuarioActual[0].itinerarioAsignado.hotel;
            this.asesorAsignado = this.grupoFiltradoUsuarioActual[0].itinerarioAsignado.asesor;
            this.conductorAsignado = this.grupoFiltradoUsuarioActual[0].itinerarioAsignado.conductor;
            this.guiaAsignado = this.grupoFiltradoUsuarioActual[0].itinerarioAsignado.guia;
            localStorage.setItem('hotel usuario', this.hotelAsignado[0].nombre);
            localStorage.setItem('asesor asignado', this.asesorAsignado[0].userName);
            localStorage.setItem('conductor asignado', this.conductorAsignado[0].nombre);
            localStorage.setItem('guia asignado', this.guiaAsignado[0].nombre);

          }
          else {
            this.abrirModalSinGrupoOItinerario();
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }


}
