import { z } from "zod";
 
export const createProductoSchema = z.object({
  descripcion: z.string({required_error: "Nombre is required",}),
  precio: z.number({required_error: "Nota1 es requerida",})
    .min(1,{message:"La nota debe ser como minimo 1 y maximo 50",})
    .max(50,{message:"La nota debe ser como minimo 1 y maximo 50"},),
  stock: z.number({required_error: "Nota2 es requerida"},)
    .min(1,{message:"La nota debe ser como minimo 1 y maximo 50"},)
    .max(50,{message:"La nota debe ser como minimo 1 y maximo 50"},),
});