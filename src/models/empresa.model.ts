import mongoose from "mongoose";

export interface Producto{
    imagen: string;
    nombreProducto: string;
    precio: number;
};

export interface Empresa{
    _id?: mongoose.Types.ObjectId;
    nombreEmpresa: string;
    logo: string;
    descripcion: number;
    productos: Array<Producto>;
};