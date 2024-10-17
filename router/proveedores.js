import { Router } from "express";
import {
  todosProveedores,
  nombreProveedores,
  marcasProveedores,
  horasProveedores,
} from "../controllers/proveedores/read.js";
import { crear, crearVarios } from "../controllers/proveedores/create.js";

const router = Router();

router.get("/all", todosProveedores);
router.get("/nombre/:x", nombreProveedores);
router.get("/marcasSuministradas/:x", marcasProveedores);
router.get("/horasEntrega/:x", horasProveedores);
router.post("/create", crear);
router.post("/createAll", crearVarios);

export default router;
