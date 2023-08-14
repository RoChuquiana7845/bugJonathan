import { Router } from "express";
import {
  createProducto,
  deleteProducto,
  getProducto,
  getProductos,
  updateProducto,
} from "../controllers/producto.controllers.js";

import authenticateToken from "../middlewares/auth.token.js";
import { createProductoSchema } from "../schemas/producto.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/",authenticateToken, getProductos);


router.post("/",authenticateToken,validateSchema(createProductoSchema), createProducto);

router.get("/:id", authenticateToken, getProducto);

router.put("/:id", authenticateToken, updateProducto);

router.delete("/:id", authenticateToken, deleteProducto);

export default router;
