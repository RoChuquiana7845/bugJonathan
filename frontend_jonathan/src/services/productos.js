import axios from "./axios";

export const getProductosRequest = async () => axios.get("/producto");

export const createProductosRequest = async (producto) => axios.post("/producto", producto);

export const updateProductosRequest = async (id,producto) =>
  axios.put(`/producto/${id}`, producto);

export const deleteProductosRequest = async (id) => axios.delete(`/producto/${id}`);

export const getProductoRequest = async (id) => axios.get(`/producto/${id}`);
