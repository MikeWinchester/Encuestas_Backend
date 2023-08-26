import mongoose from "mongoose";
import { BaseUsuario } from "./usuarios.model";

export interface Direccion{
    descripcion: string;
    latitud: string;
    longitud: string;
};

export interface Pedido{
    _id?: mongoose.Types.ObjectId,
    estado: string;
    nombre: string;
    cliente: BaseUsuario;
    fecha: string;
    hora: string;
    productos: Array<String>;
    total: number;
    direccion: Direccion;
};