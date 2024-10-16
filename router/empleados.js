import { Router } from "express";
import {
  todosEmpleados,
  cargoEmpleados,
  salarioEmpleados,
} from "../controllers/empleados/read.js";
import { create, createAll } from "../controllers/empleados/create.js";

const router = Router();

router.get("/all", todosEmpleados);
router.get("/cargo/:x", cargoEmpleados);
router.get("/salario/:x", salarioEmpleados);
router.post("/create", create);
router.post("/createALL", createAll);

export default router;
