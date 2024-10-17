import { Router } from "express";
import {
  todasTiendas,
  nombreTiendas,
  direccionTiendas,
} from "../controllers/tiendas/read.js";
import { crear, crearVarios } from "../controllers/tiendas/create.js";

const router = Router();

router.get("/all", todasTiendas);
router.get("/nombre/:x", nombreTiendas);
router.get("/direccion/:x", direccionTiendas);
router.post("/create", crear);
router.post("/createAll", crearVarios);

export default router;
