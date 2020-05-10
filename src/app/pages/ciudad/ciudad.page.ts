import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.page.html',
  styleUrls: ['./ciudad.page.scss'],
})
export class CiudadPage implements OnInit {
  userNameFiltrado;
  ciudad;
  Mensaje;

  constructor(private menu: MenuController, private afs:AngularFirestore,private alertController: AlertController,
    private Router: Router,
    ) { }

  ngOnInit() {
    this.userNameFiltrado = localStorage.getItem('userid');
    console.log(this.userNameFiltrado);

    this.ciudad=localStorage.getItem("ciudad")
    console.log(this.ciudad)

    this.BuscarCiudad();
  }

  openCustom() {
    this.menu.enable(true, "main");
    this.menu.open("main");
  }
  atras() {
    this.menu.close("main");
  }


  BuscarCiudad(){
    console.log(this.ciudad);
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection("Mensajes de bienvenida")
      .where("ciudad", "==", this.ciudad) //donde dice pasajero debe decir this.userNameFiltrado
        .get()
        .then(querymensaje => {
          const arrayMensajeUsuarioActual = [];
          querymensaje.forEach(function (docMensaje) {
            var objMensaje = JSON.parse(JSON.stringify(docMensaje.data()));
            objMensaje.id = docMensaje.id;
            arrayMensajeUsuarioActual.push(objMensaje);
          });
          if (arrayMensajeUsuarioActual.length > 0) {
            resolve(arrayMensajeUsuarioActual);
            this.Mensaje=arrayMensajeUsuarioActual;
            console.log(this.Mensaje[0].ciudad)
          }
          else {
            console.log("quedo mal la consulta de los mensajes ");
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
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

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1500);
  }


}
