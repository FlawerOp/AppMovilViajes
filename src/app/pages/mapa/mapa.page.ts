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
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  private arraynuevo: any[];
  uid;
  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad: any = null;
  public userUid: string = null;

  nombreUsuario;
  idUsuarioActual;
  HotelLocalStorage;
  HotelUsuarioActual;  
  
 
  user: UserInterface = {
    name: "",
    email: ""
  };
  constructor(private loadingController: LoadingController,
    private mainService: MainService,
    private Router: Router,
    private toastController: ToastController,
    private authService: AuthService,
    private menu: MenuController,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private afs: AngularFirestore,
    private aFauth: AngularFireAuth) { }

  ngOnInit() {
    this.nombreUsuario=localStorage.getItem('userid');
    localStorage.getItem('hotel usuario');
    this.HotelLocalStorage=localStorage.getItem('hotel usuario');
    this.authService.isAuth().subscribe(user => {
      if (user) {
        console.log(user);
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.idUsuarioActual = user.uid;
        console.log(this.idUsuarioActual);
      }
    });
    this.getHotel();
    this.getCiudad();
  }
  openCustom() {
    this.menu.enable(true, "main");
    this.menu.open("main");
  }
  atras() {
    this.menu.close("main");
  }
  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1500);
  }

  getCiudad() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService
          .isUserPasajero(this.userUid, this.ciudad)
          .subscribe(userRole => {
            console.log(userRole);
            this.isPasajero = userRole.Pasajero;
            console.log("resultado pasajero=" + this.isPasajero);
            this.isAsesor = userRole.Asesor;
            console.log("resultado asesor=" + this.isAsesor);
            this.ciudad = userRole.ciudad;
            console.log("la ciudad del pasajero es: " + this.ciudad);
          });
      }
    });
  }

getHotel(){
  return new Promise((resolve, reject) => {
    this.afs.firestore.collection("hoteles")
      .where("nombre", "==", this.HotelLocalStorage)
      .get().then(queryConductorUsuario => {
        const arrayHotelUsuarioActual = [];
        queryConductorUsuario.forEach(function (docConductor) {
          var objHotel = JSON.parse(JSON.stringify(docConductor.data()));
          objHotel.id = docConductor.id;
          arrayHotelUsuarioActual.push(objHotel);
        });
        if (arrayHotelUsuarioActual.length > 0) {
          resolve(arrayHotelUsuarioActual);
          this.HotelUsuarioActual = arrayHotelUsuarioActual;
          console.warn(this.HotelUsuarioActual);
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
