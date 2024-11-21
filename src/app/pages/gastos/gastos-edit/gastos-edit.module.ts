import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastosEditPageRoutingModule } from './gastos-edit-routing.module';

import { GastosEditPage } from './gastos-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastosEditPageRoutingModule
  ],
  declarations: [GastosEditPage]
})
export class GastosEditPageModule {}