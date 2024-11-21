import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastosInicioPage } from './gastos-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: GastosInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosInicioPageRoutingModule {}
