import express from 'express';
import { obtenerEmpresas, obtenerEmpresasHamburguesa, obtenerEmpresasPizza, obtenerEmpresasPollo, obtenerEmpresasPostre, obtenerProductosHamburguesas, obtenerProductosPizza, obtenerProductosPollo, obtenerProductosPostres } from '../controllers/empresas.controller';

const router = express.Router();

//Obtener todas las empresas => GET http://localhost:3000/empresas
router.get('', obtenerEmpresas);

//Obtener las empresas de pizza => GET http://localhost:3000/empresas/pizza
router.get('/pizza', obtenerEmpresasPizza);

//Obtener las empresas de hamburguesas => GET http://localhost:3000/empresas/hamburguesas
router.get('/hamburguesas', obtenerEmpresasHamburguesa);

//Obtener las empresas de pollo => GET http://localhost:3000/empresas/pollo
router.get('/pollo', obtenerEmpresasPollo);

//Obtener las empresas de postres => GET http://localhost:3000/empresas/postres
router.get('/postres', obtenerEmpresasPostre);

//Obtener los productos de una empresa de pizza => GET http://localhost:3000/empresas/pizza/id/productos
router.get('/pizza/:id/productos', obtenerProductosPizza);

//Obtener los productos de una empresa de hamburguesas => GET http://localhost:3000/empresas/hamburguesas/id/productos
router.get('/hamburguesas/:id/productos', obtenerProductosHamburguesas);

//Obtener los productos de una empresa de pollo => GET http://localhost:3000/empresas/pollo/id/productos
router.get('/pollo/:id/productos', obtenerProductosPollo);

//Obtener los productos de una empresa de postres => GET http://localhost:3000/empresas/postres/id/productos
router.get('/postres/:id/productos', obtenerProductosPostres);

export default router;