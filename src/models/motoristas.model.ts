import mongoose from "mongoose";

export interface BaseMotorista{
    _id?: mongoose.Types.ObjectId;
    nombreCompleto: string;
    experiencia: string;
    correo: string;
}

export interface Motorista extends BaseMotorista{
    edad: number;
    contrasena: string;
    estado: string;
};