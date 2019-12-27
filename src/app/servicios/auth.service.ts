import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'protractor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private aFauth:AngularFireAuth) {}

login(pasaporte:string,password:string){

return new  Promise ((resolve,rejected)=> {

  this.aFauth.auth.signInWithEmailAndPassword(pasaporte+'@hotmail.com',password).then(user=>{
  
    resolve (user)
  }).catch(err=>rejected (err)); 
  
  }

);
}

isAuth() {
  return this.aFauth.authState.pipe(map(auth => auth));
}

}