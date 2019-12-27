import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoRapidoPage } from './contacto-rapido.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoRapidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoRapidoPageRoutingModule {}
