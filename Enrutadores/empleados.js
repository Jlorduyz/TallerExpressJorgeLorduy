import { Router } from "express";
import {
  todosEmpleados,
  cargoEmpleados,
  salarioEmpleados,
} from "../controladores/empleados/leer.js";
import { crear, crearVarios } from "../controladores/empleados/crear.js";

const router = Router();

router.get("/all", todosEmpleados);
router.get("/cargo/:x", cargoEmpleados);
router.get("/salario/:x", salarioEmpleados);
router.post("/create", crear);
router.post("/createALL", crearVarios);

export default router;
