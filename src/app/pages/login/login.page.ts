import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { LottieAnimationViewModule } from "ng-lottie";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  GrupoUsuarioActual;
  pasaporte: string;
  password: string;
  Newpassword: string;
  nombreUsuario;
  uid;
  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad: any = null;
  public userUid: string = null;
  constructor(
    public af: AngularFireAuth,
    public fs: AngularFirestore,
    private authService: AuthService,
    public router: Router,
    public alertController: AlertController, private modalController: ModalController) { }

  ngOnInit() {
  }


  Onsubmitlogin() {
   
    console.log(this.pasaporte,this.password)
    this.authService.login(this.pasaporte, this.password).then(res => {
      this.getRol();
      if (this.isAsesor == true) {
        this.router.navigate(["/contacto-rapido"]);
        this.abrirAlertBienvenidaAsesor();
      }
      else {
        if (this.isPasajero == true) {
          this.router.navigate(["/onboarding/"]);
          this.abrirAlertCambioConstraseña();
        }
      }
      this.authService.consultarUserNameUsuarioActual();
     this.authService.consultarUserNameUsuarioActual().then(username=>{
       this.nombreUsuario=username[0].userName
       console.log(this.nombreUsuario)
       localStorage.setItem('userid', this.nombreUsuario); //eso es para que quede guardada la variable en el almacenamiento local del dispositivo 
     })

    }).catch(err => this.abrirAlertBadPassword());
    
  }

  async abrirAlertBienvenidaAsesor() {
    const alert= await this.alertController.create({
      header:'Bienvenido asesor/a  '+this.pasaporte,
      subHeader:'aquí encontrarás todos los pasajeros que te han enviado mensajes',
      buttons: [{text:'OK'}]
    })
    await alert.present();
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

  getRol() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserPasajero(this.userUid, this.ciudad)
          .subscribe(userRole => {
            this.isPasajero = userRole.Pasajero;
            console.log("resultado pasajero=" + this.isPasajero);
            this.isAsesor = userRole.Asesor;
            console.log("resultado asesor=" + this.isAsesor);
            this.ciudad = userRole.ciudad;
            console.log("la ciudad del pasajero es: " + this.ciudad);
            localStorage.setItem('ciudad',this.ciudad);
            
          })

        }
    })
  }


}