import { Request, Response } from "express"
import { UsuarioSchema } from "../models/usuarios.schemas"
import mongoose from "mongoose";

export const registrarUsuario = async (req: Request, res: Response) => {
    const usuario = await UsuarioSchema.findOne({correo: req.body.correo});
    if(!usuario){
        const usuarioAgregado = await UsuarioSchema.create({
            _id: new mongoose.Types.ObjectId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad,
            correo: req.body.correo,
            contrasena: req.body.contrasena
        })
        usuarioAgregado.contrasena = 'No disponible.'
        res.send({mensaje: 'Usuario registrado exitosamente.', usuarioAgregado})
    }else{
        res.send({error: 'Usuario existente.'})
    }
}