import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiasdescPage } from './guiasdesc.page';

const routes: Routes = [
  {
    path: '',
    component: GuiasdescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiasdescPageRoutingModule {}
