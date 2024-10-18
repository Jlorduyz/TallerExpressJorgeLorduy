import Producto from "../../modelos/Producto.js";

let crear = async (req, res, next) => {
  try {
    let producto = req.body;
    let crear = await Producto.create(producto);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};
let crearVarios = async (req, res, next) => {
  try {
    let producto = req.body;
    let crear = await Producto.insertMany(producto);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};

export { crear, crearVarios };
