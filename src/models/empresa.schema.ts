import mongoose from "mongoose";
import { Empresa, Producto } from "./empresa.model";

export const schema = new mongoose.Schema<Empresa>({
    nombreEmpresa: String,
    logo: String,
    descripcion: String,
    productos: Array<Producto>
});
    
export const EmpresaSchema = mongoose.model('empresas', schema);