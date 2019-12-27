import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GuiaI } from "../models/guias.interface";
export interface GuiaID extends GuiaI {id:string;}
@Injectable({
  providedIn: 'root'
})
export class GuiasService {
  private guiaCollection :AngularFirestoreCollection<GuiaI>;
  guias:Observable<GuiaID[]>;
  
  public guiaSelected={
    id:null,
    nombre:'',
    telefono:'',
    foto:''
  };
  
  
    constructor(private readonly afs:AngularFirestore) { 
      
      this.guiaCollection=afs.collection<GuiaI>('guias');
      this.guias=this.guiaCollection.snapshotChanges().pipe(
        map(actions=>actions.map(a=>{
          const data=a.payload.doc.data() as GuiaI;
          const id=a.payload.doc.id;
          return {id, ...data};
        }))
      );
    }
  
    getAllGuias(){
      return this.guias;
    }
}
