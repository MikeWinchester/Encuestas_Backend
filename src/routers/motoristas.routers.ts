import express from 'express';
import { enviarSolicitud, iniciarSesion, tomarPedido } from '../controllers/motoristas.controller';

const router = express.Router();

router.post('/aplicar', enviarSolicitud);
router.post('/login', iniciarSesion);
router.put('/aceptar-orden', tomarPedido);

export default router;