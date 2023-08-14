import Producto from "../models/producto.model.js";

export const getProductos = async (req, res) => {
  
    const productoss = await Student.find({user: req.user.userId}).populate();
    console.log(productoss)
    res.status(200).json(productos)
    
};

export const createProducto = async (req, res) => {
  try {
     const { descripcion,precio,stock } = req.body;
    
    const existingEst = await Producto.findOne({ descripcion });
    if (existingEst) {
      return res.status(400).json({ message: 'Ya existe un producto con esa descripcion' });
    }
    console.log(req.body)
    const producto = new Producto({
      descripcion,
      precio,
      stock,
      user: req.user.userId
    });
    console.log()
    const productoOk= await producto.save();

    res.status(200).json({"status":"registro ingresado ok", productoOk});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al insertar" });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    
    const producto = await Producto.findByIdAndDelete(id) ;
    if (!producto) {
      return res.status(404).json({ message: 'producto no encontrado' });
    }
    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ha ocurrido un error al eliminar el producto' });
  }
};

export const updateProducto = async (req, res) => {
     try {
    const { id } = req.params;
    const { descripcion, precio,stock } = req.body;

    
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    
    producto.descripcion = descripcion;
    producto.precio = precio;
    producto.stock = stock;
    await producto.save();

    res.status(200).json({"status":"registro actualizado ok",producto});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al actualizar el prodcuto' });
  }
};

export const getProducto = async (req, res) => {
    try {
    const { id } = req.params;

    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).json({ message: 'producto no encontrado' });
    }
   
    res.status(200).json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al obtener el producto' });
    }
};
