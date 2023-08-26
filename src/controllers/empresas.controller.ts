import { Request, Response } from "express"
import mongoose from "mongoose";
import { EmpresaSchema } from "../models/empresa.schema";

//lógica para obtener todas las empresas
export const obtenerEmpresas = async (req: Request, res: Response) => {
    const empresas = await EmpresaSchema.find({}, {productos: false});
    if(empresas){
        res.send(empresas);
    }else{
        res.send({error: 'No hay empresas disponibles.'});
    };
};

//Lógica para obtener las empresas de pizza
export const obtenerEmpresasPizza = async (req: Request, res: Response) => {
    const empresas = await EmpresaSchema.find({categoria: 'pizza'}, {productos: false});
    if(empresas){
        res.send(empresas);
    }else{
        res.send({error: 'No hay empresas disponibles.'});
    };
};

//Lógica para obtener las empresas de hamburguesas
export const obtenerEmpresasHamburguesa = async (req: Request, res: Response) => {
    const empresas = await EmpresaSchema.find({categoria: 'hamburguesas'}, {productos: false});
    if(empresas){
        res.send(empresas);
    }else{
        res.send({error: 'No hay empresas disponibles.'});
    };
};

//Lógica para obtener las empresas de pollo
export const obtenerEmpresasPollo = async (req: Request, res: Response) => {
    const empresas = await EmpresaSchema.find({categoria: 'pollo'}, {productos: false});
    if(empresas){
        res.send(empresas);
    }else{
        res.send({error: 'No hay empresas disponibles.'});
    };

    res.end();
};

//Lógica para obtener las empresas de postres
export const obtenerEmpresasPostre = async (req: Request, res: Response) => {
    const empresas = await EmpresaSchema.find({categoria: 'postres'}, {productos: false});
    if(empresas){
        res.send(empresas);
    }else{
        res.send({error: 'No hay empresas disponibles.'});
    };

    res.end();
};

//Lógica para obtener los productos de una empresas de pizza
export const obtenerProductosPizza = async (req: Request, res: Response) => {
    const empresas = await EmpresaSchema.findOne({_id:req.params.id, categoria: 'pizza'}, {nombreEmpresa: true, productos: true});
    if(empresas){
        res.send(empresas);
    }else{
        res.send({error: 'No hay productos disponibles.'});
    };

    res.end();
};

//Lógica para obtener los productos de una empresas de hamburguesas
export const obtenerProductosHamburguesas = async (req: Request, res: Response) => {
    const empresas = await EmpresaSchema.findOne({_id:req.params.id, categoria: 'hamburguesas'}, {nombreEmpresa: true, productos: true});
    if(empresas){
        res.send(empresas);
    }else{
        res.send({error: 'No hay productos disponibles.'});
    };

    res.end();
};

//Lógica para obtener los productos de una empresas de pollo
export const obtenerProductosPollo = async (req: Request, res: Response) => {
    const empresas = await EmpresaSchema.findOne({_id:req.params.id, categoria: 'pollo'}, {nombreEmpresa: true, productos: true});
    if(empresas){
        res.send(empresas);
    }else{
        res.send({error: 'No hay productos disponibles.'});
    };

    res.end();
};

//Lógica para obtener los productos de una empresas de postres
export const obtenerProductosPostres = async (req: Request, res: Response) => {
    const empresas = await EmpresaSchema.findOne({_id:req.params.id, categoria: 'postres'}, {nombreEmpresa: true, productos: true});
    if(empresas){
        res.send(empresas);
    }else{
        res.send({error: 'No hay productos disponibles.'});
    };

    res.end();
};