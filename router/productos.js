import { Router } from "express";
import {
  todosProductos,
  marcaProductos,
  tipoProductos,
} from "../controllers/productos/read.js";
import { create, createAll } from "../controllers/productos/create.js";

const router = Router();

router.get("/all", todosProductos);
router.get("/marca/:x", marcaProductos);
router.get("/tipo/:x", tipoProductos);
router.post("/create", create);
router.post("/createAll", createAll);

export default router;
