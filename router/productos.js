import { Router } from "express";
import {
  todosProductos,
  marcaProductos,
  tipoProductos,
} from "../controllers/productos/read.js";
import { crear, crearVarios } from "../controllers/productos/create.js";

const router = Router();

router.get("/all", todosProductos);
router.get("/marca/:x", marcaProductos);
router.get("/tipo/:x", tipoProductos);
router.post("/create", crear);
router.post("/createAll", crearVarios);

export default router;
