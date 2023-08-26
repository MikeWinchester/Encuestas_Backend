import mongoose from "mongoose";
import { Producto } from "./empresa.model";

export interface ElementoPedido{
    _id?: mongoose.Types.ObjectId;
    nombrePedido: string;
    fecha: string;
    hora: string;
    productos: Array<Producto>;
};

export interface BaseUsuario{
    _id?: mongoose.Types.ObjectId;
    nombre: string;
    apellido: string;
}

export interface Usuario extends BaseUsuario{
    edad: number;
    correo: string;
    contrasena: string;
    carroDeCompras: Array<ElementoPedido>;
    pedidosEspera: Array<ElementoPedido>;
};