import { Router } from "express";
import {
  todosProductos,
  marcaProductos,
  tipoProductos,
} from "../controllers/productos/read.js";

const router = Router();

router.get("/all", todosProductos);
router.get("/marca/:x", marcaProductos);
router.get("/tipo/:x", tipoProductos);

export default router;
