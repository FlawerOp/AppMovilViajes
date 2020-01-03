import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemanaPageRoutingModule } from './semana-routing.module';

import { SemanaPage } from './semana.page';

import { NgCalendarModule  } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCalendarModule,
    IonicModule,
    SemanaPageRoutingModule
  ],
  declarations: [SemanaPage]
})
export class SemanaPageModule {}
