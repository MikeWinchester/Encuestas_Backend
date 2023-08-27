import { Request, Response } from "express";
import mongoose from "mongoose";
import { MotoristaSchema } from "../models/motoristas.schema";
import { AdministradorSchema } from "../models/administrador.schema";
import { PedidoSchema } from "../models/pedidos.schema";

export const enviarSolicitud = async (req: Request, res: Response) => {
    const idMotorista = new mongoose.Types.ObjectId
    const motorista = await MotoristaSchema.findOne({correo: req.body.correo});
    if(!motorista){
        await AdministradorSchema.updateMany({},{
            $push: {
                solicitudes:{
                    _id: idMotorista,
                    nombreCompleto: req.body.nombreCompleto,
                    edad: req.body.edad,
                    contrasena: req.body.contrasena,
                    experiencia: req.body.experiencia,
                    correo: req.body.correo
                }
            }
        });

        await MotoristaSchema.create({
            _id: idMotorista,
            nombreCompleto: req.body.nombreCompleto,
            edad: req.body.edad,
            contrasena: req.body.contrasena,
            experiencia: req.body.experiencia,
            correo: req.body.correo,
            estado: "Solicitud en Proceso."
        });

        res.send({mensaje: "Solicitud enviada con éxito."})
    }else{
        res.send({error: 'Usuario existente.'});
    };
    res.end();
};

export const iniciarSesion = async (req: Request, res: Response) => {
    const motorista = await MotoristaSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena, estado: "Solicitud aceptada."}, {contrasena: false});
    if(motorista){
        res.send({mensaje: 'Inicio de sesión exitoso.', motorista});
    }else{
        res.send({error: 'Usuario no encontrado.'});
    };
    res.end();
};

export const tomarPedido =async (req:Request, res: Response) => {
    await PedidoSchema.findOneAndUpdate({fecha: req.body.fecha, hora: req.body.hora},{
        motorista: req.body.motorista,
        estado: "En ejecución"
    });
    res.send({mensaje: 'Orden tomada con éxito.'});
    res.end();
};

