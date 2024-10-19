import { Router } from "express";
import {
  todasTiendas,
  nombreTiendas,
  direccionTiendas,
} from "../controladores/tiendas/leer.js";
import { crear, crearVarios } from "../controladores/tiendas/crear.js";

const enrutador = Router();

enrutador.get("/todos", todasTiendas);
enrutador.get("/nombre/:x", nombreTiendas);
enrutador.get("/direccion/:x", direccionTiendas);
enrutador.post("/crear", crear);
enrutador.post("/crearVarios", crearVarios);

export default enrutador;
