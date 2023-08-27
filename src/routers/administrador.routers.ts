import express from 'express';
import { aceptarSolicitud, iniciarSesion, obtenerSolicitudes } from '../controllers/administrador.controller';

const router = express.Router();

router.post('/login', iniciarSesion);

router.get('/solicitudes', obtenerSolicitudes);

router.put('/solicitudes/aceptar-solicitud', aceptarSolicitud);

export default router;