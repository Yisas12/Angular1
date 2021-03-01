import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehiculo, MarcaVehiculo, TipoVehiculo, ColorVehiculo } from './../vehiculo.model';
import { VehiculosService } from './../vehiculos.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.scss']
})
export class ListadoVehiculosComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  buscados: Vehiculo[] = []; //it is an array to show only the searched vehicle
  vehiculo!: Vehiculo;
  //we have this form to search a vehicle in the array "vehiculos"
  public matriculasForm: FormGroup = new FormGroup({mat: new FormControl(null, Validators.required)}); 
  //we have this form to delete a vehicle in the array "vehicles"
  public matriculasOutForm: FormGroup = new FormGroup({matt: new FormControl(null, Validators.required)});

  constructor(private vehiculosService: VehiculosService) { }


  ngOnInit(): void {
    this.vehiculos = this.vehiculosService.getVehiculos();
  }

  //we take de enrollment to search if the vehicle exist in our "vehiculos" array
  buscarVehiculos(): void{
   // debugger;
    if(this.matriculasForm.valid) {
      this.vehiculo=this.vehiculosService.buscarVehiculo(this.matriculasForm.get('mat')?.value);
      this.buscados.push(this.vehiculo);
    } else {

    }
  }
 
  //we put the "buscados" array lenght to 0 because we want to show all vehicles
  buscadosA0(): void{
    this.buscados.length=0;
  }

  //we delete a vehicle that exists in the "vehiculos" array 
  eliminar1(): void{
    if(this.matriculasOutForm.valid){
      this.vehiculosService.extraerVehiculo(this.matriculasOutForm.get('matt')?.value);
    }
  }

}
