import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from "../../servicios/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserInterface } from "../../models/user";
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(public navCtrl: NavController, private Router: Router,
    private authService: AuthService) { }

  public isPasajero: any = null;
  public isAsesor: any = null;
  public ciudad : any = null;
  public userUid: string = null;
  ngOnInit() {
    this.getCurrentUser();
  }

  skip() {
    this.Router.navigate(["/main"]);
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserPasajero(this.userUid,this.ciudad)
          .subscribe(userRole => {
            console.warn(userRole);
            this.isPasajero=userRole.Pasajero;
            console.warn("resultado pasajero="+this.isPasajero);
            this.isAsesor=userRole.Asesor;
            console.warn("resultado asesor="+this.isAsesor);
            this.ciudad=userRole.ciudad;
            console.warn ("la ciudad del pasajero es: "+ this.ciudad);
          }) 
      }
    })



  }


}
