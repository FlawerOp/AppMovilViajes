import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MainService } from "../../servicios/main.service";
import { AuthService } from 'src/app/servicios/auth.service';
import { UserInterface } from '../../../app/models/user';
import { MenuController } from '@ionic/angular';
import { GuiasService } from "../../servicios/guias.service";


@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {
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
       // this.user.ciudad = user.ciudad;
      }
    });

    this.getCiudad();

  }
//TODO: traer los resultados de la base de datos aunas variables para que se muestren en el sidemu 
  openCustom() {
    this.menu.enable(true, 'cn');
    this.menu.open('cn');
  }
  atras() {
    this.menu.close('cn');
  }

  user: UserInterface = {
    name: '',
    email: '',
    userName:'',
    ciudad:''
  };

  public providerId: string = 'null';

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
