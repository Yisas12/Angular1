//A vehicle is composed by an id, a brand, a model, an enrollment, a type, a color and a fault
export interface Vehiculo{
    id: number;
    marca: string;
    modelo: string;
    matricula: string;
    tipoVehiculo: string;
    colorVehiculo: string;
    averia:string;
}

export interface MarcaVehiculo{
    id: string;
}

export interface TipoVehiculo{
    id: string;
}

export interface ColorVehiculo{
    id: string;
}