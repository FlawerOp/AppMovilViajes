import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MainI } from "../models/main.interface";
import { ItinerarioI } from "../models/main.interface";
import { AuthService } from "../servicios/auth.service";
export interface MainID extends MainI {id:string;}
export interface ItinerarioID extends ItinerarioI {id:string;}
@Injectable({
  providedIn: 'root'
})

export class MainService {
private mainCollection: AngularFirestoreCollection<MainI>;
private itinerarioCollection:AngularFirestoreCollection<ItinerarioI>;

main:Observable<MainID[]>;
itinerario:Observable <ItinerarioID[]>;
itinerarioFiltrado;
public isPasajero: any = null;
public isAsesor: any = null;
public ciudad : any = null;
public userUid: string = null;
public nombre_Usuario_Actual:string=null;
aja;
  public mainSelected={
    id:null,
    titulo:'',
    descripcionCorta:'',
    descripcionLarga:'',
    duracion:'',
    incluye:'',
    no_incluye:'',
    recomendaciones:'',
    imagenes:''
  };

public itinerarioSelected={
  id:null,
  nombre_itinerario:'',
  grupo_itinerario:'',
  hotel_itinerario:'',
  tours_itinerario:'',
  hora_inicio:'',
  hora_finalizacion:'',
  guia_tour:'',
  conductor_itinerario:'',
  asesor_itinerario:''
}


  constructor(private readonly afs: AngularFirestore, private authService:AuthService) {
    this.mainCollection=afs.collection<MainI> ('Tours');
    this.itinerarioCollection=afs.collection<ItinerarioI> ('itinerarios');
    this.main=this.mainCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data=a.payload.doc.data() as MainI;
        const id=a.payload.doc.id;
        return {id,...data};
      }))
    );

    this.itinerario= this.itinerarioCollection.snapshotChanges().pipe(
      map (actions=> actions.map (a=>{
        const data =a.payload.doc.data() as ItinerarioI;
        const id= a.payload.doc.id;
        return {id,...data};
      }))
    );
   } //fin del constructor


   getAllEventos(){
    return this.main
   }

   getAllItinerarios(){
     return this.itinerario
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
            this.nombre_Usuario_Actual=userRole.userName;
            console.warn("el nombre del usuario actual es: "+this.nombre_Usuario_Actual);
          })
      }
    })
  }

  consultas() {
    //-----------------------Intento1-----------------------------------------------
    // var itinerariosRef = this.afs.firestore.collection('itinerarios');
    //console.warn (itinerariosRef);
    //-----------------------Fin Intento1-----------------------------------------------
    //-----------------------Intento2-----------------------------------------------
    //  var query = this.afs.collection('itinerarios', ref => ref.where('nombre', '==', "Hora Sirviendo"));
    // console.warn(query);
    //-----------------------Fin Intento2-----------------------------------------------
    //-----------------------Intento3-----------------------------------------------
 /*   const size$ = new Subject<void>();
    const queryObservable = size$.pipe(
      switchMap(nombre =>
        this.afs.collection('itinerarios').valueChanges()
      )
    )
    queryObservable.subscribe(queriedItems => {
      console.warn(queriedItems);
    });*/
    //-----------------------Fin Intento3-----------------------------------------------
    //-----------------------Intento4-----------------------------------------------
    return new Promise((resolve, reject) => {
      this.afs.firestore.collection('itinerarios')
      .where('conductor', 'array-contains', "Fabian")
        .get().then((querySnapshot) => {
          let arr = [];
          querySnapshot.forEach(function (doc) {
            var obj = JSON.parse(JSON.stringify(doc.data()));
            obj.id = doc.id;
            //obj.eventId = doc.id;
            arr.push(obj);
          });

          if (arr.length > 0) {
            console.log(arr);
            resolve(arr);
            this.itinerarioFiltrado=arr
          } else {
            console.log("No such document!");
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
    //-----------------------Fin Intento4-----------------------------------------------
  }



}
