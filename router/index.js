import { Router } from "express";
import routerTiendas from "./tiendas.js";
import routerEmpleados from "./empleados.js";
import routerProductos from "./productos.js";

const router = Router();

router.use("/tiendas", routerTiendas);
router.use("/empleados", routerEmpleados);
router.use("/productos", routerProductos);

export default router;
