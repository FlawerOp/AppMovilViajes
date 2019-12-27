import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../servicios/auth.service'
import { LottieAnimationViewModule } from "ng-lottie";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pasaporte:string;
  password:string;

  constructor(private authService:AuthService,public router:Router) { }

  ngOnInit() {
  }


  Onsubmitlogin(){
this.authService.login(this.pasaporte,this.password).then(res=>{
this.router.navigate(["/onboarding/"]);
}).catch(err=>alert ('los datos son incorrectos o el usuario no existe'+console.log(err)));

  }


  public lottieConfig = {
    path: '../assets/passport.json',
    renderer: 'canvas',
    autoplay: true,
    loop: true
  };

}
