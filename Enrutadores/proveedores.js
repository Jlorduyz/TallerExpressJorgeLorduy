import { Router } from "express";
import {
  todosProveedores,
  nombreProveedores,
  marcasProveedores,
  horasProveedores,
} from "../controladores/proveedores/leer.js";
import { crear, crearVarios } from "../controladores/proveedores/crear.js";

const enrutador = Router();

enrutador.get("/todos", todosProveedores);
enrutador.get("/nombre/:x", nombreProveedores);
enrutador.get("/marcasSuministradas/:x", marcasProveedores);
enrutador.get("/horasEntrega/:x", horasProveedores);
enrutador.post("/crear", crear);
enrutador.post("/crearVarios", crearVarios);

export default enrutador;
