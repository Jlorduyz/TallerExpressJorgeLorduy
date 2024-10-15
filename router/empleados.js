import { Router } from "express";
import {
  todosEmpleados,
  cargoEmpleados,
  salarioEmpleados,
} from "../controllers/empleados/read.js";

const router = Router();

router.get("/all", todosEmpleados);
router.get("/cargo/:x", cargoEmpleados);
router.get("/salario/:x", salarioEmpleados);

export default router;
