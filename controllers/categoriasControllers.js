const connection = require("../database");

const obtenerCategorias = (req,res) => {
    connection.query('SELECT * FROM categorias', (error,results) =>{
        if(error){
            console.error("Error al obtener la categoria", error);
            res.status(500).json({
                error: "Error al obtener categorias",
            });
        } else{
            res.json(results);
        }
    });
};

const obtenerCategoriasPorId = (req,res) =>{
    const id = req.params.id_categoria;
    
    connection.query('SELECT*FROM categorias WHERE id_categoria = ?', [id], (error,results) =>{
        if(error){
            console.error("Error al obtener la categoria", error);
            res.status(500).json({error:"Ocurrio un error al obtener categoria"});
        }else if (results.length === 0){
            res.status(500).json({error: "La categoria no fue encontrada"})
        }else{
            res.json(results[0]);
        }
    });
}

const crearCategorias =(req, res) => {
    const {nombre, imagen_categoria} = req.body; //req.body porque lo envias en el cuerpo de la pagina
    connection.query('INSERT INTO categorias (nombre, imagen_categoria) VALUES (?, ?)', [nombre, imagen_categoria], (error, results) =>{
        if(error){
            console.error("Error al agregar categoria", error);
            res.status(500).json({error:"Error al agregar categoria"});
        }else{
            res.json({message: "Categoria agregada"});
        }
    });
}

const eliminarCategoriasPorId = (req,res) =>{
    const id = req.params.id_categoria;

    connection.query('DELETE FROM categorias WHERE id_categoria = ?', [id], (error,results) =>{
        if(error){
            console.error("Error al actualizar la categoria", error);
            res.status(500).json({error:"Ocurrio un error al obtener categoria"});
        }else{
            res.json({message:"La categoria fue eliminada correctamente"});
        }
    });
}

const actualizarCategoriasPorId = (req,res) => {
    const id = req.params.id_categoria;
    const {nombre, imagen_categoria} = req.body;

    connection.query('UPDATE categorias SET nombre = ?, imagen_categoria = ? WHERE id_categoria = ?', [nombre, imagen_categoria, id], (error,results) =>{
        if(error){
            console.error("Error al actualizar categoria", error);
            res.status(500).json({error:"Ocurrio un error al actualizar la categoria"});
        }else{
            res.json({message:"La categoria se actualizo correctamente"});
        }
    });
}

module.exports = {
    obtenerCategorias,
    obtenerCategoriasPorId,
    crearCategorias,
    actualizarCategoriasPorId,
    eliminarCategoriasPorId,
}



