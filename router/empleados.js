import { Router } from "express";
import {
  todosEmpleados,
  cargoEmpleados,
  salarioEmpleados,
} from "../controllers/empleados/read.js";
import { crear, crearVarios } from "../controllers/empleados/create.js";

const router = Router();

router.get("/all", todosEmpleados);
router.get("/cargo/:x", cargoEmpleados);
router.get("/salario/:x", salarioEmpleados);
router.post("/create", crear);
router.post("/createALL", crearVarios);

export default router;
