import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductoresPageRoutingModule } from './conductores-routing.module';

import { ConductoresPage } from './conductores.page';

import { GoogleMapsComponent } from "../../google-maps/google-maps.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoresPageRoutingModule,
  ],
  declarations: [ConductoresPage,GoogleMapsComponent]
})
export class ConductoresPageModule {}
