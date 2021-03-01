import { Component, OnInit } from '@angular/core';
import { VehiculosService } from './../vehiculos.service';
import { Vehiculo, MarcaVehiculo, TipoVehiculo, ColorVehiculo } from './../vehiculo.model';


@Component({
  selector: 'app-alta-vehiculo',
  templateUrl: './alta-vehiculo.component.html',
  styleUrls: ['./alta-vehiculo.component.scss']
})

export class AltaVehiculoComponent implements OnInit {

  vehiculo!: Vehiculo;
  marcas!: MarcaVehiculo[];
  tipos!: TipoVehiculo[];
  colores!: ColorVehiculo[];
  averia! : String;

  constructor(private vehiculosService : VehiculosService) { }


  ngOnInit(): void {
    this.vehiculo =  this.vehiculosService.nuevoVehiculo();
    this.marcas = this.vehiculosService.getMarca();
    this.tipos = this.vehiculosService.getTipo();
    this.colores = this.vehiculosService.getColor();
    this.averia = this.vehiculosService.getAveria();
  }

  //we introduce a vehicle in the "vehiculos" array that is in the vehiculosService
  nuevoVehiculo(): void{
    this.vehiculosService.introducirVehiculo(this.vehiculo);
    this.vehiculo = this.vehiculosService.nuevoVehiculo();
  }
}
