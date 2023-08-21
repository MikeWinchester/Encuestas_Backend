import mongoose from "mongoose";

export interface Usuario{
    _id?: mongoose.Types.ObjectId,
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    contrasena: string;
}