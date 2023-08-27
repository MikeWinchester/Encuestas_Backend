import { Request, Response } from "express"
import mongoose from "mongoose";
import { PedidoSchema } from "../models/pedidos.schema";
import { UsuarioSchema } from "../models/usuarios.schemas";


export const crearPedido = async (req: Request, res: Response) => {
    const idPedido = new mongoose.Types.ObjectId; 
    const pedido = await PedidoSchema.create({
        _id: idPedido,
        estado: "En Espera",
        nombre: req.body.nombre,
        cliente: req.body.cliente,
        fecha: req.body.fecha,
        hora: req.body.hora,
        productos: req.body.productos,
        total: req.body.total,
        direccion: req.body.direccion,
        motorista: "No asignado"
    });
    const usuario = await UsuarioSchema.findById(req.body.cliente.id);
    if(usuario){
       await UsuarioSchema.findByIdAndUpdate(req.body.cliente.id, {
            $pull: {
                carroDeCompras: {
                    nombrePedido: req.body.nombre,
                    fecha: req.body.fecha,
                    hora: req.body.hora,
                },
            },
            $push: {
                pedidosEspera:{
                    _id: idPedido,
                    nombrePedido: req.body.nombre,
                    fecha: req.body.fecha,
                    hora: req.body.hora,
                    productos: req.body.productos
                }
            }
        });
    }

    res.send({mensaje: "Pedido creado exitosamente:", pedido});
    res.end();
};

export const obtenerPedidosEnEspera =async (req:Request, res: Response) => {
    const pedidos = await PedidoSchema.find({estado: "En Espera"});
    if (pedidos){
        res.send(pedidos)
    }else{
        res.send({mensaje: "No hay pedidos en espera."})
    };
    res.end();
}