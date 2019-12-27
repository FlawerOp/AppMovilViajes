import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(public navCtrl: NavController,private Router: Router) { }

  ngOnInit() {
  }

    
  skip(){

    this.Router.navigate(["/main"]);

  }


}
