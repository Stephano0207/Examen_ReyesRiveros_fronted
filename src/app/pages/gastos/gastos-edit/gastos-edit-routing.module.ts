import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastosEditPage } from './gastos-edit.page';

const routes: Routes = [
  {
    path: '',
    component: GastosEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosEditPageRoutingModule {}
