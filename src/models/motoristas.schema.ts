import mongoose from "mongoose";
import { Motorista } from "./motoristas.model";

export const schema = new mongoose.Schema<Motorista>({
    nombreCompleto: String,
    edad: Number,
    correo: String,
    contrasena: String,
    experiencia: String,
    estado: String
});
    
export const MotoristaSchema = mongoose.model('motoristas', schema);