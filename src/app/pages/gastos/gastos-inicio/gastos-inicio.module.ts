import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastosInicioPageRoutingModule } from './gastos-inicio-routing.module';

import { GastosInicioPage } from './gastos-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastosInicioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GastosInicioPage]
})
export class GastosInicioPageModule {}
