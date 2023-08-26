import express from 'express';
import { agregarPedidoACarroDeCompras, iniciarSesion, obtenerCarroDeCompras, registrarUsuario } from '../controllers/usuarios.controller';

const router = express.Router();

//Registrar un usuario => POST http://localhost:3000/usuarios
router.post('', registrarUsuario);

//Inicio de sesión de un usuario => POST http://localhost:3000/usuarios/login
router.post('/login', iniciarSesion);

//Agregar un pedido (en estado inicial) al carro de compras de un usuario => PUT http://localhost:3000/usuarios/id/carro-de-compras
router.put('/:id/carro-de-compras', agregarPedidoACarroDeCompras);

//Obtener el carro de compras de un usuario => GET http://localhost:3000/usuarios/id/carro-de-compras
router.get('/:id/carro-de-compras', obtenerCarroDeCompras);

export default router;