import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclutamientoCreatePageRoutingModule } from './reclutamiento-create-routing.module';

import { ReclutamientoCreatePage } from './reclutamiento-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclutamientoCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReclutamientoCreatePage]
})
export class ReclutamientoCreatePageModule {}
