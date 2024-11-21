import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclutamientoEditPage } from './reclutamiento-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ReclutamientoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclutamientoEditPageRoutingModule {}
