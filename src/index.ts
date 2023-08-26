import express, { Express, Request, Response } from "express";
import cors from 'cors';
import { Database } from "./utils/database";
import usuarioRouter from "./routers/usuarios.router";
import empresaRouter from "./routers/empresas.router";
import pedidoRouter from "./routers/pedidos.router";

const app:Express = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

const db:Database = new Database();

app.use('/usuarios', usuarioRouter);
app.use('/empresas', empresaRouter);
app.use('/pedidos', pedidoRouter);

app.get('/', (_req: Request, res:Response) =>{
    res.send('Servidor de ParaYa.')
    res.end()
});

app.listen(PORT, () =>{
    console.log(`Servidor de ParaYa levantado en el puerto ${PORT}.`)
});