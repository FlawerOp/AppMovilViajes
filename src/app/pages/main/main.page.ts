import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MainService } from "../../servicios/main.service";
import { AuthService } from 'src/app/servicios/auth.service';
import { UserInterface } from '../../../app/models/user';
import { MenuController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";
import { ModalController } from "@ionic/angular"; 
import { AngularFirestore,AngularFirestoreCollection } from "@angular/fire/firestore";
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  private arraynuevo: any[];
  uid;
  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad: any = null;
  public userUid: string = null;

  array: any;
  arrayItinerarios:any;
  constructor(
    private loadingController: LoadingController,
    private mainService: MainService,
    private Router: Router,
    private toastController: ToastController,
    private authService: AuthService,
    private menu: MenuController,
    private router:Router,
    private alertController: AlertController,
    private modalController :ModalController,
    private afs:AngularFirestore
    
  ) { }

  ngOnInit() {
    this.mainService.getAllEventos().subscribe(res => {
      this.array = res;
      console.log(this.array);
    });

    this.mainService.getAllItinerarios().subscribe (res=>{
      this.arrayItinerarios=res;
      console.log (this.arrayItinerarios);
    })

  this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        //this.user.photoUrl = user.photoURL;
      }
    });
    console.log(name);
    
    this.mainService.getCiudad();
    console.log("cfdhnjaskfh")

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
    email: ''
  };

  public providerId: string = 'null';

  esta(titulo, url, duracion, descripcionCorta, descripcionLarga, incluye,
     no_incluye, recomendaciones) {

    this.Router.navigate(["/descripcion/", titulo, url, duracion, descripcionCorta, descripcionLarga, incluye, no_incluye, recomendaciones]);
  }

  doRefresh(event) { 
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }

  irAlChat(){
    this.Router.navigate (["/contacto-rapido"]);
  }


async  abrirModal(){
     const alert=await this.alertController.create(
      {
        header:"Bienvenido a la seccion de ayuda",
        subHeader:"aqui podras contactarte con tu asesor turistico en caso de tener problemas, dudas, felicitaciones, o cualquier otra cosa que necesites...",
        message:'simplemente haz click en tu asesor y escribe lo que necesites',
        buttons:[{text:'Ok, llevame allí',handler:()=>{
          this.irAlChat();
        }}]
      })
      await alert.present()
    }
    buscar(){
      console.log ("aja")
    //  this.afs.collection('itinerarios',ref=> ref.where('nombre','==',true)).
    
    }


}
