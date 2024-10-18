import Producto from "../../modelos/Producto.js";

let todosProductos = async (req, res, next) => {
  try {
    let todos = await Producto.find();
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};

let marcaProductos = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todos = await Producto.find({ marca: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};

let tipoProductos = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todos = await Producto.find({ tipo: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};

export { todosProductos, marcaProductos, tipoProductos };
