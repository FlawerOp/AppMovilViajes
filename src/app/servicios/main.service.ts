import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MainI } from "../models/main.interface";

export interface MainID extends MainI {id:string;}
@Injectable({
  providedIn: 'root'
})

export class MainService {
private mainCollection: AngularFirestoreCollection<MainI>;
main:Observable<MainID[]>;
  public mainSelected={
    id:null,
    titulo:'',
    descripcion:'',
    duracion:'',
    incluye:'',
    no_incluye:'',
    recomendaciones:'',
    imagenes:''
  };

  constructor(private readonly afs: AngularFirestore) {
    this.mainCollection=afs.collection<MainI> ('eventos');
    this.main=this.mainCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data=a.payload.doc.data() as MainI;
        const id=a.payload.doc.id;
        return {id,...data};
      }))
    );
   } //fin del constructor

   getAllEventos(){
    return this.main
   }


}
