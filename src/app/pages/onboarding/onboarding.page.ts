import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from "../../servicios/auth.service";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(public navCtrl: NavController, private Router: Router,
    private authService: AuthService, private alertController:AlertController
    ,private afs: AngularFirestore,) { }

  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad : any = null;
  public userUid: string = null;

  nombreUsuario;
  Mensaje;

  ngOnInit() {
    this.nombreUsuario=localStorage.getItem('userid');
    this.ciudad=localStorage.getItem('ciudad');
    console.warn(this.nombreUsuario,this.ciudad);
  }

  skip() {
    this.Router.navigate(["/ciudad"]);
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        console.log (this.userUid);
        this.authService.isUserPasajero(this.userUid,this.ciudad)
          .subscribe(userRole => {
            this.isPasajero=userRole.Pasajero;
            console.log("resultado pasajero="+this.isPasajero);
            this.isAsesor=userRole.Asesor;
            console.log("resultado asesor="+this.isAsesor);
            this.ciudad=userRole.ciudad;
           // console.warn (this.ciudad);
          }) 
      }
    })
  }




 /*  async abrirModalBienvenidaCiudad() {
    const alert = await this.alertController.create({
      header: "¡Bienvenido a "+this.ciudad+"!",
      subHeader:"un poco de la ciudad: ",
      message:""+this.Mensaje[0].descripcion,
      buttons: [
        {
          text: "Aceptar",
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
*/

}
