import mongoose from "mongoose";
import { Pedido } from "./pedidos.model";



export const schema = new mongoose.Schema<Pedido>({
    estado: String,
    nombre: String,
    cliente: Object,
    fecha: String,
    hora: String,
    productos: Array<String>,
    total: Number,
    direccion: Object,
    motorista: String
});
    
export const PedidoSchema = mongoose.model('pedidos', schema);