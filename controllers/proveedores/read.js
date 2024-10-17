import Proveedor from "../../models/Proveedor.js";

let todosProveedores = async (req, res, next) => {
  try {
    let todos = await Proveedor.find();
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};
let nombreProveedores = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todos = await Proveedor.find({ nombre: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};
let marcasProveedores = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todos = await Proveedor.find({ marcasSuministradas: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};
let horasProveedores = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todos = await Proveedor.find({ horasEntrega: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};

export {
  todosProveedores,
  nombreProveedores,
  marcasProveedores,
  horasProveedores,
};
