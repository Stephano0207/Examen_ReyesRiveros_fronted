import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclutamientoInicioPage } from './reclutamiento-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: ReclutamientoInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclutamientoInicioPageRoutingModule {}
