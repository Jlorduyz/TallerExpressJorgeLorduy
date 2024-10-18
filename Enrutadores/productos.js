import { Router } from "express";
import {
  todosProductos,
  marcaProductos,
  tipoProductos,
} from "../controladores/productos/read.js";
import { crear, crearVarios } from "../controladores/productos/create.js";

const enrutador = Router();

enrutador.get("/all", todosProductos);
enrutador.get("/marca/:x", marcaProductos);
enrutador.get("/tipo/:x", tipoProductos);
enrutador.post("/create", crear);
enrutador.post("/createAll", crearVarios);

export default enrutador;
