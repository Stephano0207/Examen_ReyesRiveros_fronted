import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclutamientoInicioPageRoutingModule } from './reclutamiento-inicio-routing.module';

import { ReclutamientoInicioPage } from './reclutamiento-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclutamientoInicioPageRoutingModule
  ],
  declarations: [ReclutamientoInicioPage]
})
export class ReclutamientoInicioPageModule {}
