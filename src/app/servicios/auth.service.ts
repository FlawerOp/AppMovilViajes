import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from "protractor";
import { map } from "rxjs/operators";
import { auth } from "firebase";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { UserInterface } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userNameFiltrado;
  grupoFiltradoUsuarioActual;
  idUsuarioActual;
  userNameUsuarioActual;
  itinerarioUsuarioActual;
  AsesorDelUsuarioActual;
  ConductorDelUsuarioActual;
  EventosDelUsuarioActual;
  GruposDelUsuarioActual;
  GuiaDelUsuarioActual;
  HotelDelUsuarioActual;

  constructor(private aFauth: AngularFireAuth, private db: AngularFirestore) {}

  login(pasaporte: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.aFauth.auth
        .signInWithEmailAndPassword(pasaporte + "@hotmail.com", password)
        .then(userData => {
          resolve(userData);
          console.log(userData);
          console.warn(userData.user.uid);
          this.idUsuarioActual = userData.user.uid;
        })
        .catch(err => console.log(rejected(err)));
    });
  }

  isAuth() {
    return this.aFauth.authState.pipe(map(auth => auth));
  }

  isUserPasajero(userUid, ciudad) {
    return this.db.doc<UserInterface>(`users/${userUid}`).valueChanges();
    return this.db.doc<UserInterface>(`users/${ciudad}`).valueChanges();
  }
  isUserAsesor(userUid) {
    return this.db.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }

  consultarUserNameUsuarioActual() {
    return new Promise((resolve, reject) => {
      this.db.firestore
        .collection("users")
        .where("id", "==", this.idUsuarioActual)
        .get()
        .then(querySnapshot => {
          let arr = [];
          querySnapshot.forEach(function(doc) {
            var obj = JSON.parse(JSON.stringify(doc.data()));
            obj.id = doc.id;
            //obj.eventId = doc.id;
            arr.push(obj);
            // console.log (arr[0].userName);
            //  this.userNameUsuarioActual=arr[0].userName;
          });
          if (arr.length > 0) {
            resolve(arr);
            this.userNameFiltrado = arr[0].userName;
            console.warn(this.userNameFiltrado);
          } else {
            console.error("No existe el documento solicitado!");
            resolve(null);
          }
          console.warn(this.userNameFiltrado);
        });
    });
  }

  consultarGrupoUsuarioActual() {
    return new Promise((resolve, reject) => {
      this.db.firestore
        .collection("grupos")
        .where("usuarios_grupo", "array-contains", this.userNameFiltrado) //donde dice pasajero debe decir this.userNameFiltrado
        .get()
        .then(queryGrupos => {
          const arrayGrupoUsuarioActual = [];
          queryGrupos.forEach(function(docGrupo) {
            var objGrupos = JSON.parse(JSON.stringify(docGrupo.data()));
            objGrupos.id = docGrupo.id;
            arrayGrupoUsuarioActual.push(objGrupos);
          });
          if (arrayGrupoUsuarioActual.length > 0) {
            resolve(arrayGrupoUsuarioActual);
            this.grupoFiltradoUsuarioActual =
              arrayGrupoUsuarioActual[0].nombre_grupo;
            console.warn(this.grupoFiltradoUsuarioActual);
          } else {
            console.log("no existe esa monda po weon");
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(error);
        });

      return this.userNameUsuarioActual;
    });
  }

  consultarItinerariodelUsuario() {
    return new Promise((resolve, reject) => {
      this.db.firestore
        .collection("itinerarios")
        .where("grupo", "array-contains", this.grupoFiltradoUsuarioActual)
        .get()
        .then(queryItinerarioUsuarioActual => {
          const arrayItinerarioUsuarioActual = [];
          queryItinerarioUsuarioActual.forEach(function(docItinerario) {
            var objItinerarios = JSON.parse(
              JSON.stringify(docItinerario.data())
            );
            objItinerarios.id = docItinerario.id;
            arrayItinerarioUsuarioActual.push(objItinerarios);
          });
          if (arrayItinerarioUsuarioActual.length > 0) {
            resolve(arrayItinerarioUsuarioActual);
            this.itinerarioUsuarioActual = arrayItinerarioUsuarioActual;
            console.warn(this.itinerarioUsuarioActual);
            this.AsesorDelUsuarioActual =
            arrayItinerarioUsuarioActual[0].asesor;
            console.warn(this.AsesorDelUsuarioActual);
            this.EventosDelUsuarioActual=arrayItinerarioUsuarioActual[0].eventos;
            console.warn(this.EventosDelUsuarioActual);
          } else {
            console.warn("la cagó en la consulta ome arepa ome");
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(null);
        });
    });
  }

  consultarAsesorDelItinerario() {
   /* return new Promise((resolve, reject) => {
      console.log(this.AsesorDelUsuarioActual);
      this.db.firestore
        .collection("contactos")
        .where("nombre", "==", this.AsesorDelUsuarioActual)
        .get()
        .then(queryAsesorUsuarioActual => {
          const arrayAsesorUsuarioActual = [];
          queryAsesorUsuarioActual.forEach(function(docAsesor) {
            var objAsesores = JSON.parse(JSON.stringify(docAsesor.data()));
            objAsesores.id = docAsesor.id;
            arrayAsesorUsuarioActual.push(objAsesores);
          });
          if (arrayAsesorUsuarioActual.length > 0) {
            resolve(arrayAsesorUsuarioActual);
            this.AsesorDelUsuarioActual = arrayAsesorUsuarioActual;
            console.warn(this.AsesorDelUsuarioActual);
          } else {
            console.warn("quedo mal la consulta");
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(null);
        });
    });*/
  }

  imprimir() {
    console.error(this.userNameUsuarioActual);
    console.error(this.grupoFiltradoUsuarioActual);
    console.error(this.itinerarioUsuarioActual);
    console.log(this.AsesorDelUsuarioActual);
  }
}
