import mongoose from "mongoose";
import { Administrador } from "./administrador.model";
import { BaseMotorista } from "./motoristas.model";

export const schema = new mongoose.Schema<Administrador>({
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    solicitudes: Array<BaseMotorista>
});
    
export const AdministradorSchema = mongoose.model('administradores', schema);