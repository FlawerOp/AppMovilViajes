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
import { GuiasService } from 'src/app/servicios/guias.service';


@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {

  private arraynuevo: any[];
  uid;
  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad: any = null;
  public userUid: string = null;



  idUsuarioActual;
  nombreUsuario; 
  conductorUsuarioActual;
  ConductorLocalStorage;

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
    private menu: MenuController,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private afs: AngularFirestore,
    private aFauth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.nombreUsuario=localStorage.getItem('userid');
    localStorage.getItem('conductor asignado');
    this.ConductorLocalStorage=localStorage.getItem('conductor asignado');
    this.authService.isAuth().subscribe(user => {
      if (user) {
        console.log(user);
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.idUsuarioActual = user.uid;
      }
    });

    this.getCiudad();
    this.consultarConductorUsuarioActual();
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1500);
  }

  openCustom() {
    this.menu.enable(true, 'cn');
    this.menu.open('cn');
  }
  atras() {
    this.menu.close('cn');
  }



  public providerId: string = 'null';

  getCiudad() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserPasajero(this.userUid, this.ciudad)
          .subscribe(userRole => {
            console.log(userRole);
            this.isPasajero = userRole.Pasajero;
            console.log("resultado pasajero=" + this.isPasajero);
            this.isAsesor = userRole.Asesor;
            console.log("resultado asesor=" + this.isAsesor);
            this.ciudad = userRole.ciudad;
            console.log("la ciudad del pasajero es: " + this.ciudad);
          })

      }

    })
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

  irAlChat() {
    this.Router.navigate(["/contacto-rapido"]);
  }

  consultarConductorUsuarioActual() {
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection("conductores")
        .where("nombre", "==", this.ConductorLocalStorage)
        .get().then(queryConductorUsuario => {
          const arrayCondutorUsuarioActual = [];
          queryConductorUsuario.forEach(function (docConductor) {
            var objConductor = JSON.parse(JSON.stringify(docConductor.data()));
            objConductor.id = docConductor.id;
            arrayCondutorUsuarioActual.push(objConductor);
          });
          if (arrayCondutorUsuarioActual.length > 0) {
            resolve(arrayCondutorUsuarioActual);
            this.conductorUsuarioActual = arrayCondutorUsuarioActual;
            console.warn("toda la info Conductor ");
            console.warn(this.conductorUsuarioActual);
          }
          else {
            console.error("quedo mal la consulta");
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(null);
        })
    })
  }

}
