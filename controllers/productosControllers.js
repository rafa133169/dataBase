const connection = require("../database");

const obtenerProductos = (req,res) => {
    connection.query('SELECT * FROM productos', (error, results) =>{
        if(error){
            console.error("Error al obtener productos", error);
            res.status(500).json({
                error:"Error al obtener productos",
            });
        }else{
            res.json(results);
        }
    });
};

const obtenerProductosPorId = (req, res) =>{
    const id = req.params.id_producto
    connection.query('SELECT * FROM productos WHERE id_producto = ?', [id], (error,results) =>{
        if(error){
            console.error("Error al obtener producto", error),
            res.status(500).json({error:"Error al obtener el producto"})
        }else if (results.length === 0){
            res.status(500).json({error:"El procuto no fue encontrado"})
        }else{
            res.json(results[0]);
        }
    });
}

const crearProductos =(req,res) => {
    const {nombre, descripcion, precio, imagen} = req.body;
    connection.query('INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)',[nombre, descripcion, precio, imagen],(error,results) =>{
        if(error){
            console.error("Error al agregar el producto", error);
            res.status(500).json({error:"Error al crear producto"});
        }else{
            res.json({message:"Producto agregado"});
        }
    });
}

const eliminarProductosPorId = (req,res) =>{
    const id = req.params.id_producto
    connection.query('DELETE FROM productos WHERE id_producto = ?', [id], (error,results) =>{
        if(error){
            console.error("Error al eliminar el producto", error);
            res.status(500).json({error:"Error al eliminar producto"});
        }else{
            res.json({message:"El producto fue eliminado correctamente"});
        }
    });
}

const actualizarProductosPorId = (req,res) =>{
    const id = req.params.id_producto;
    const {nombre, descripcion, precio, imagen} = req.body;
    connection.query('UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, imagen = ? WHERE id_producto = ?', [nombre, descripcion, precio, imagen, id], (error,results) =>{
        if(error){
            console.error("Error al actualizar el producto", error);
            res.status(500).json({error:"Error al eliminar producto"});
        }else{
            res.json({message:"El producto se actualizo correctamente"});
        }
    });
}

module.exports = {
    obtenerProductos,
    obtenerProductosPorId,
    crearProductos,
    eliminarProductosPorId,
    actualizarProductosPorId,
}
