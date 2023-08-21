import mongoose from "mongoose";
import { Usuario } from "./usuarios.model";

export const schema = new mongoose.Schema<Usuario>({
    nombre: String,
    apellido: String,
    edad: Number,
    correo: String,
    contrasena: String
})
    
export const UsuarioSchema = mongoose.model('usuarios', schema)