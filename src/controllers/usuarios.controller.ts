import { Request, Response } from "express";
import { UsuarioSchema } from "../models/usuarios.schemas";
import mongoose from "mongoose";

//Lógica para registrar un usuario
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
        });
        usuarioAgregado.contrasena = 'No disponible.';
        res.send({mensaje: 'Usuario registrado exitosamente.', usuarioAgregado});
    }else{
        res.send({error: 'Usuario existente.'});
    };
    res.end();
};

//Lógica para que un usuario inicie sesión
export const iniciarSesion = async (req: Request, res: Response) => {
    const usuario = await UsuarioSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena}, {contrasena: false});
    if(usuario){
        res.send({mensaje: 'Inicio de sesión exitoso.', usuario});
    }else{
        res.send({error: 'Usuario no encontrado.'});
    };
    res.end();
};

//Lógica para agregar un pedido (pedido en estado inicial) al carro de compras de un usuario
export const agregarPedidoACarroDeCompras =async (req:Request, res: Response) => {
    const usuario = await UsuarioSchema.findById(req.params.id);
    if(usuario){

        const usuarioExistente = await UsuarioSchema.findByIdAndUpdate(req.params.id, {
            $push: {
                carroDeCompras:{
                    _id: new mongoose.Types.ObjectId,
                    nombrePedido: req.body.nombrePedido,
                    fecha: req.body.fecha,
                    hora: req.body.hora,
                    productos: req.body.productos
                }
            }
        });
        res.send(usuarioExistente);
    }else{
        res.send({error: 'Usuario no encontrado.'});
    };
    res.send();
};

//Lógica para obtener el carro de compras de un usuario
export const obtenerCarroDeCompras =async (req:Request, res: Response) => {
    const usuario = await UsuarioSchema.findById(req.params.id, {carroDeCompras: true, _id: false});
    if(usuario){
        res.send(usuario.carroDeCompras);
    }else{
        res.send({error: 'Usuario no encontrado.'});
    };
    res.end();
};