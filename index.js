//dependencias
const express = require("express");
const cors = require("cors");

const categoriasRouter = require('./router/categoriasRouter');
const productosRouter = require('./router/productosRouter');


//app va a tener todos los atributos y metodos de express
const app = express();

app.use(cors());

app.use(express.json());

//Ruta al router
app.use('/categorias', categoriasRouter);
app.use('/productos', productosRouter);


//  app.get('/',(requ,res) => {
//     res.send("<h1>Hola pikachu</h1>");
// });


app.listen(3001, () => {
    console.log ("API escuchando por el puerto 3001");
});