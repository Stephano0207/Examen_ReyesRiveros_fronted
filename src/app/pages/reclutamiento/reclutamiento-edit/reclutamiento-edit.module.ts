import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclutamientoEditPageRoutingModule } from './reclutamiento-edit-routing.module';

import { ReclutamientoEditPage } from './reclutamiento-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclutamientoEditPageRoutingModule
  ],
  declarations: [ReclutamientoEditPage]
})
export class ReclutamientoEditPageModule {}
