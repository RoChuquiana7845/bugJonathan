import { createContext, useContext, useState } from "react";
import {
  createProductosRequest,
  deleteProductosRequest,
  getProductosRequest,
  getProductoRequest,
  updateProductosRequest,
} from "../services/productos";

const ProductoContext = createContext();

export const useProducto = () => {
  const context = useContext(ProductoContext);
  if (!context) throw new Error("useProducto sin Contexto");
  return context;
};

export function ProductoProvider({ children }) {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await getProductosRequest();
    console.log(res.data)
    setProductos(res.data);
  };

  const deleteProducto = async (id) => {
    try {
      const res = await deleteProductosRequest(id);
      if (res.status === 204) setProductos(productos.filter((producto) => producto._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createProducto = async (producto) => {
    try {
      const res = await createProductosRequest(producto);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducto = async (id) => {
    try {
      const res = await getProductoRequest(id);
      console.log(res)
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProducto = async (id, producto) => {
    try {
      await updateProductosRequest(id, producto);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductoContext.Provider
      value={{
        productos,
        getProductos,
        deleteProducto,
        createProducto,
        getProducto,
        updateProducto,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
}
