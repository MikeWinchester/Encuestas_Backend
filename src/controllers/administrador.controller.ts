import { Request, Response } from "express";
import { AdministradorSchema } from "../models/administrador.schema";
import { MotoristaSchema } from "../models/motoristas.schema";

export const iniciarSesion = async (req: Request, res: Response) => {
    const administrador = await AdministradorSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena}, {contrasena: false});
    if(administrador){
        res.send({mensaje: 'Inicio de sesión exitoso.', administrador});
    }else{
        res.send({error: 'Administrador no encontrado.'});
    };
    res.end();
};

export const obtenerSolicitudes = async (req:Request, res: Response) => {
    const administrador = await AdministradorSchema.findOne({}, {solicitudes: true, _id: false});
    if(administrador){
        res.send(administrador.solicitudes);
    }else{
        res.send({error: 'Administrador no encontrado.'});
    };
    res.end();
};

export const aceptarSolicitud =async (req:Request, res: Response) => {
    await AdministradorSchema.updateMany({}, {
        $pull:{
            solicitudes:{
                correo: req.body.correo
            }
        }
    });
    await MotoristaSchema.findOneAndUpdate({correo: req.body.correo}, {
        estado: 'Solicitud aceptada.'
    });
    res.send({mensaje: 'Solicitud aceptada con éxito.'});
    res.end();
};