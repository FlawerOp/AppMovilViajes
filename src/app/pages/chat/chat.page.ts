import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  text: string;
  chatRef: any;
  uid: string;
  nombre: string;
  telefono: string;

  constructor(
    private active: ActivatedRoute,
    public af: AngularFireAuth,
    public fs: AngularFirestore,) {
      this.nombre = this.active.snapshot.paramMap.get("nombre");
      this.uid = localStorage.getItem('userid');
      this.chatRef = this.fs.collection(this.nombre, ref=>ref.orderBy('Timestamp')).valueChanges();
     }

     send(){
       if (this.text != '') {
         this.fs.collection(this.nombre).add({
           Name:this.uid,
           Message: this.text,
           UserID: this.uid,
           Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         });
         this.text=''; 
       }
     }

  ngOnInit() {
    console.log(this.nombre);
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }

}
