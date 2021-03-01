import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosService } from './vehiculos.service';
import { AltaVehiculoComponent } from './alta-vehiculo/alta-vehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoVehiculosComponent } from './listado-vehiculos/listado-vehiculos.component';


@NgModule({
  declarations: [AltaVehiculoComponent, ListadoVehiculosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    VehiculosService
  ],
  exports: [
    AltaVehiculoComponent,
    ListadoVehiculosComponent,
  ]
})
export class VehiculosModule { }
