import { Router } from "express";
import {
  todasTiendas,
  nombreTiendas,
  direccionTiendas,
} from "../controllers/tiendas/read.js";
import { create, createAll } from "../controllers/tiendas/create.js";

const router = Router();

router.get("/all", todasTiendas);
router.get("/nombre/:x", nombreTiendas);
router.get("/direccion/:x", direccionTiendas);
router.post("/create", create);
router.post("/createAll", createAll);

export default router;
