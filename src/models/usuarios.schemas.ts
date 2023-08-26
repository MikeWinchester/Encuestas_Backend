import mongoose from "mongoose";
import { ElementoPedido, Usuario } from "./usuarios.model";

export const schema = new mongoose.Schema<Usuario>({
    nombre: String,
    apellido: String,
    edad: Number,
    correo: String,
    contrasena: String,
    carroDeCompras: Array<ElementoPedido>,
    pedidosEspera: Array<ElementoPedido>
});
    
export const UsuarioSchema = mongoose.model('usuarios', schema);