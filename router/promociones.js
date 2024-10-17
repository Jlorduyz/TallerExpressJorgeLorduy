import { Router } from "express";
import {
  todasPromociones,
  marcaPromociones,
  supermercadosPromociones,
} from "../controllers/promociones/read.js";
import { crear, crearVarios } from "../controllers/promociones/create.js";

const router = Router();

router.get("/all", todasPromociones);
router.get("/marca/:x", marcaPromociones);
router.get("/supermercados/:x", supermercadosPromociones);
router.post("/create", crear);
router.post("/createAll", crearVarios);

export default router;
