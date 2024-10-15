import Producto from "../../models/Producto.js";

let todosProductos = async (req, res) => {
  try {
    let todos = await Producto.find();
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};

let marcaProductos = async (req, res) => {
  try {
    let query = req.params.x;
    let todos = await Producto.find({ marca: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};

let tipoProductos = async (req, res) => {
  try {
    let query = req.params.x;
    let todos = await Producto.find({ tipo: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};

export { todosProductos, marcaProductos, tipoProductos };
