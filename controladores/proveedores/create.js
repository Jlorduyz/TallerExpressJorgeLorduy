import Proveedor from "../../modelos/Proveedor.js";

let crear = async (req, res, next) => {
  try {
    let proveedor = req.body;
    let crear = Proveedor.create(proveedor);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};
let crearVarios = async (req, res, next) => {
  try {
    let proveedores = req.body;
    let crear = Proveedor.insertMany(proveedores);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};

export { crear, crearVarios };
