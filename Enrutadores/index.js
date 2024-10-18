import { Router } from "express";
import Tiendas from "./tiendas.js";
import Empleados from "./empleados.js";
import Productos from "./productos.js";
import Promociones from "./promociones.js";
import Proveedores from "./proveedores.js";

const enrutador = Router();

enrutador.use("/tiendas", Tiendas);
enrutador.use("/empleados", Empleados);
enrutador.use("/productos", Productos);
enrutador.use("/promociones", Promociones);
enrutador.use("/proveedores", Proveedores);

export default enrutador;
