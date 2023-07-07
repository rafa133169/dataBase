const express = require("express");
const productosControllers = require('../controllers/productosControllers');
const { route } = require("./categoriasRouter");
const router = express.Router();

router.get('/', productosControllers.obtenerProductos);
router.get('/:id_producto', productosControllers.obtenerProductosPorId);
router.post('/', productosControllers.crearProductos);
router.delete('/:id_producto',productosControllers.eliminarProductosPorId);
router.put('/:id_producto', productosControllers.actualizarProductosPorId);

module.exports = router;