const express = require("express");
const categoriasControllers = require("../controllers/categoriasControllers");

const router= express.Router();

router.get('/',categoriasControllers.obtenerCategorias);

module.exports = router;