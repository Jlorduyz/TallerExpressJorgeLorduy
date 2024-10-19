import { Router } from "express";
import {
  todasPromociones,
  marcaPromociones,
  supermercadosPromociones,
} from "../controladores/promociones/leer.js";
import { crear, crearVarios } from "../controladores/promociones/crear.js";

const enrutador = Router();

enrutador.get("/todos", todasPromociones);
enrutador.get("/marca/:x", marcaPromociones);
enrutador.get("/supermercados/:x", supermercadosPromociones);
enrutador.post("/crear", crear);
enrutador.post("/crearVarios", crearVarios);

export default enrutador;
