import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'protractor';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from "@angular/fire/firestore";
import { UserInterface } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private aFauth:AngularFireAuth,private db :AngularFirestore) {}

login(pasaporte:string,password:string){
return new  Promise ((resolve,rejected)=> {
  this.aFauth.auth.signInWithEmailAndPassword(pasaporte+'@hotmail.com',password).then(userData=>{
    resolve (userData)
    console.log(userData)
  }).catch(err=>console.log(rejected (err))); 
  
  });
} 


isAuth() {
  return this.aFauth.authState.pipe(map(auth => auth));
}

isUserPasajero (userUid,ciudad){
  return this.db.doc<UserInterface>(`users/${userUid}`).valueChanges();
  return this.db.doc<UserInterface> (`users/${ciudad}`).valueChanges();
}
isUserAsesor(userUid){
return this.db.doc<UserInterface>(`users/${userUid}`).valueChanges();
}

}