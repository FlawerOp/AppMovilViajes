import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiasdescPageRoutingModule } from './guiasdesc-routing.module';

import { GuiasdescPage } from './guiasdesc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiasdescPageRoutingModule
  ],
  declarations: [GuiasdescPage]
})
export class GuiasdescPageModule {}
