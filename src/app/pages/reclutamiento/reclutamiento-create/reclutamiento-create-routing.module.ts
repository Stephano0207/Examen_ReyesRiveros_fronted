import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclutamientoCreatePage } from './reclutamiento-create.page';

const routes: Routes = [
  {
    path: '',
    component: ReclutamientoCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclutamientoCreatePageRoutingModule {}
