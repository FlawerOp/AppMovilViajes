import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MainService } from "../../servicios/main.service";
import { AuthService } from 'src/app/servicios/auth.service';
import { UserInterface } from '../../../app/models/user';
import { MenuController } from '@ionic/angular';
import { GuiasService } from "../../servicios/guias.service";

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
  constructor(
    private guiaService: GuiasService,
    private loadingController: LoadingController,
    private mainService: MainService,
    private Router: Router,
    private toastController: ToastController,
    private authService: AuthService,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.guiaService.getAllGuias().subscribe(res => this.array2 = res);
    this.mainService.getAllEventos().subscribe(res => {
      this.array = res;
      console.log(this.array);
    });

    this.authService.isAuth().subscribe(user => {
      if (user) {
        console.log(user);
        this.user.name = user.displayName;
        this.user.email = user.email;
       // this.user.photoUrl = user.photoURL;
      }
    });
    this.getCiudad();
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

  esta(nombre, telefono) {
    this.Router.navigate(["/chat/", nombre, telefono]);
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

}
