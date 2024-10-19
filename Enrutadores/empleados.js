import { Router } from "express";
import {
  todosEmpleados,
  cargoEmpleados,
  salarioEmpleados,
} from "../controladores/empleados/leer.js";
import { crear, crearVarios } from "../controladores/empleados/crear.js";

const enrutador = Router();

enrutador.get("/todos", todosEmpleados);
enrutador.get("/cargo/:x", cargoEmpleados);
enrutador.get("/salario/:x", salarioEmpleados);
enrutador.post("/crear", crear);
enrutador.post("/crearVarios", crearVarios);

export default enrutador;
