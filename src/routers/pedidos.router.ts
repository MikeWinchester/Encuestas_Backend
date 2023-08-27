import express from 'express';
import { crearPedido, obtenerPedidosEnEspera } from '../controllers/pedidos.controller';

const router = express.Router();

//Crear pedido (estado "en espera", por defecto) => POST http://localhost:3000/pedidos
router.post('', crearPedido);
router.get('/espera', obtenerPedidosEnEspera);

export default router;