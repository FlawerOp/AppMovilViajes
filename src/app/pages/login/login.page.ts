import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service'
import { LottieAnimationViewModule } from "ng-lottie";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pasaporte: string;
  password: string;

  constructor(
    public af: AngularFireAuth,
    public fs: AngularFirestore,
    private authService: AuthService, 
    public router: Router) { }

  ngOnInit() {
  }


  Onsubmitlogin() {
    this.authService.login(this.pasaporte, this.password).then(res => {
      this.router.navigate(["/onboarding/"]);
      localStorage.setItem('userid', this.pasaporte);
    }).catch(err => alert('los datos son incorrectos o el usuario no existe' + console.log(err)));

  }


  public lottieConfig = {
    path: '../assets/passport.json',
    renderer: 'canvas',
    autoplay: true,
    loop: true
  };

}
