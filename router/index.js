import { Router } from "express";
import routerTiendas from "./tiendas.js";
import routerEmpleados from "./empleados.js";
import routerProductos from "./productos.js";
import routerPromociones from "./promociones.js";
import routerProveedores from "./proveedores.js";

const router = Router();

router.use("/tiendas", routerTiendas);
router.use("/empleados", routerEmpleados);
router.use("/productos", routerProductos);
router.use("/promociones", routerPromociones);
router.use("/proveedores", routerProveedores);

export default router;
