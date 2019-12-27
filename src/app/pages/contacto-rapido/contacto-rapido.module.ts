import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoRapidoPageRoutingModule } from './contacto-rapido-routing.module';

import { ContactoRapidoPage } from './contacto-rapido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoRapidoPageRoutingModule
  ],
  declarations: [ContactoRapidoPage]
})
export class ContactoRapidoPageModule {}
