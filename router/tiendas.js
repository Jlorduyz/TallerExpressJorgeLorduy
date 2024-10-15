import { Router } from "express";
import {
  todasTiendas,
  nombreTiendas,
  direccionTiendas,
} from "../controllers/tiendas/read.js";

const router = Router();

router.get("/all", todasTiendas);
router.get("/nombre/:x", nombreTiendas);
router.get("/direccion/:x", direccionTiendas);

export default router;
