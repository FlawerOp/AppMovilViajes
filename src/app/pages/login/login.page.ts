import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { LottieAnimationViewModule } from "ng-lottie";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import * as FirebaseAdmin from "firebase-admin";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pasaporte: string;
  password: string;
  Newpassword: string;
  uid;
  constructor(
    public af: AngularFireAuth,
    public fs: AngularFirestore,
    private authService: AuthService,
    public router: Router,
    public alertController: AlertController, private modalController: ModalController) { }

  ngOnInit() {

  }


  Onsubmitlogin() {
    this.authService.login(this.pasaporte, this.password).then(res => {
      this.router.navigate(["/onboarding/"]);
      localStorage.setItem('userid', this.pasaporte);
      this.abrirAlertCambioConstraseña();
    }).catch(err => this.abrirAlertBadPassword());

  }

  async abrirAlertBadPassword() {

    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Usuario o contraseña incorrectos',
      message: 'Por favor verifique la informacion enviada por su agencia.',
      buttons: ['OK'],
    });

    await alert.present();
  }


  async abrirAlertCambioConstraseña() {
    const alert = await this.alertController.create({
      header: 'Bienvenido ' + this.pasaporte,
      subHeader: 'por tu seguridad te recomendamos cambiar la clave actual',
      message: '¿Deseas cambiar la contraseña ahora?',
      buttons: [{ text: 'Quizas despues' }, {
        text: 'Actualizar contraseña', handler: () => {
          this.abrirCambioContrasena();
        }
      }],

    });

    await alert.present();
  }



  async abrirCambioContrasena() {

    const alert = await this.alertController.create({
      header: 'ingresa la nueva contraseña para' + this.pasaporte,
      inputs: [
        {
          name: 'newPassword',
          type: 'password',
          placeholder: "Ingresa la nueva contraseña"
        }
      ],
      buttons: [
        {
          text: "olvidalo"
        },
        {
          text: "ActualizarContraseña", handler: data => {
            this.Newpassword = data.newPassword,
              console.log(this.Newpassword);
            this.cambiarContrasena();
          }
        }]
    });
    await alert.present();
  }

  cambiarContrasena() {
   
  }


  public lottieConfig = {
    path: '../assets/1606profile.json',
    renderer: 'canvas',
    autoplay: true,
    loop: true
  };

}
