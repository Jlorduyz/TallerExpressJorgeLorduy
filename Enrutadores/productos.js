import { Router } from "express";
import {
  todosProductos,
  marcaProductos,
  tipoProductos,
} from "../controladores/productos/leer.js";
import { crear, crearVarios } from "../controladores/productos/crear.js";

const enrutador = Router();

enrutador.get("/todos", todosProductos);
enrutador.get("/marca/:x", marcaProductos);
enrutador.get("/tipo/:x", tipoProductos);
enrutador.post("/crear", crear);
enrutador.post("/crearVarios", crearVarios);

export default enrutador;
