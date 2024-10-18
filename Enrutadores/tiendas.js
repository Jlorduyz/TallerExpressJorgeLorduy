import { Router } from "express";
import {
  todasTiendas,
  nombreTiendas,
  direccionTiendas,
} from "../controladores/tiendas/leer.js";
import { crear, crearVarios } from "../controladores/tiendas/crear.js";

const enrutador = Router();

enrutador.get("/all", todasTiendas);
enrutador.get("/nombre/:x", nombreTiendas);
enrutador.get("/direccion/:x", direccionTiendas);
enrutador.post("/create", crear);
enrutador.post("/createAll", crearVarios);

export default enrutador;
