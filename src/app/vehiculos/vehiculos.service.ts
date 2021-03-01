import { Injectable } from '@angular/core';
import { Vehiculo, MarcaVehiculo, TipoVehiculo, ColorVehiculo } from './vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private vehiculos: Vehiculo[]; //it contains all the vehicles (each of the vehicles are composed by brand, type, etc)
  private marcas: MarcaVehiculo[]; //it contains the vehicle brand
  private tipos: TipoVehiculo[]; //it contains the vehicles type
  private colores: ColorVehiculo[]; //it contains the vehicles color
  private averia=""; //it is the fault of a vehicle

  constructor() { 
    this.vehiculos=[];
    this.marcas=[
      {
        id: 'Audi',
      },
      {
        id: 'Bentley',
      },
      {
        id:'BMW',
      },
      {
        id: 'Chevrolet',
      },
      {
        id: 'Ferrari',
      },
      {
        id:'Jaguar',
      },
      {
        id: 'Jeep',
      },
      {
        id: 'Lamborghini',
      },
      {
        id:'Maserati',
      },
      {
        id:'Mercedes-Benz',
      },
      {
        id:'Porsche',
      },
      {
        id:'Rolls-Royce',
      }
    ];

    this.tipos=[
      {
       id:'Sedan',
      },
      {
        id:'Utilitario',
      },
      {
        id:'Deportivo',
      },
      {
        id:'Descapotable',
      },
      {
        id:'SUV', 
      }
    ];

    this.colores=[
      {
        id:'Negro',
      },
      {
        id:'Blanco',
      },
      {
        id:'Azul',
      },
      {
        id:'Rojo',
      },
      {
        id:'Amarillo',
      },
      {
        id:'Verde',
      },
      {
        id:'Beige',
      }
    ];
    this.averia="";
  }

  getAveria(){
    return this.averia;
  }

  getColor(){
    return this.colores;
  }

  getTipo(){
    return this.tipos;
  }

  getMarca(){
    return this.marcas;
  }

  getVehiculos(){
    return this.vehiculos;
  }

  //we introduce a vehicle in the "vehiculos" array
  introducirVehiculo(vehiculo: Vehiculo){
    this.vehiculos.push(vehiculo);
  }

  //we create an empty vehicle
  nuevoVehiculo(): Vehiculo{
    return{
      id: 0,
      marca: '',
      modelo: '',
      matricula: '',
      tipoVehiculo: '',
      colorVehiculo: '',
      averia:""
    };
  }

  //we extract a vehicle of the "vehiculos" array
  extraerVehiculo(matt: String){
    let value = 0;
    let encontrado = new Boolean(false);
    
    for(let index=0; index < this.vehiculos.length; index++){
      if(this.vehiculos[index].matricula == matt){
        value=index;
        encontrado = true;
      }
    }

    if(encontrado == true){
      this.vehiculos.splice(value, 1);
    }
  }

  //we search a vehicle 
  buscarVehiculo(matr: string): Vehiculo{
   //this.vehiculos=this.vehiculosService.getVehiculos();
    let encontrado = new Boolean (false);
    let valor = 0;

    for (let index = 0; index < this.vehiculos.length; index++) {
      if(matr == this.vehiculos[index].matricula){
        encontrado = true;
        valor=index;
      }
    }

    if(encontrado == false){
      return{
        id: 0,
        marca: '',
        modelo: '',
        matricula: '',
        tipoVehiculo: '',
        colorVehiculo: '',
        averia:""
      };
    }
    else{
      return{
        id: valor,
        marca: this.vehiculos[valor].marca,
        modelo: this.vehiculos[valor].modelo,
        matricula: this.vehiculos[valor].matricula,
        tipoVehiculo: this.vehiculos[valor].tipoVehiculo,
        colorVehiculo: this.vehiculos[valor].colorVehiculo,
        averia: this.vehiculos[valor].averia
      };
    }
  }
}
