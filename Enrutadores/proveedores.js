import { Router } from "express";
import {
  todosProveedores,
  nombreProveedores,
  marcasProveedores,
  horasProveedores,
} from "../controladores/proveedores/read.js";
import { crear, crearVarios } from "../controladores/proveedores/create.js";

const enrutador = Router();

enrutador.get("/all", todosProveedores);
enrutador.get("/nombre/:x", nombreProveedores);
enrutador.get("/marcasSuministradas/:x", marcasProveedores);
enrutador.get("/horasEntrega/:x", horasProveedores);
enrutador.post("/create", crear);
enrutador.post("/createAll", crearVarios);

export default enrutador;
