import mongoose from "mongoose";
import { BaseMotorista } from "./motoristas.model";

export interface Administrador{
    _id?:  mongoose.Types.ObjectId;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    solicitudes: Array<BaseMotorista>;
};