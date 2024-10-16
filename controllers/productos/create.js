import Producto from "../../models/Producto.js";

let create = async (req, res) => {
  try {
    let producto = req.body;
    let create = Producto.create(producto);
    return res.status(201).json({
      response: create,
    });
  } catch (error) {
    res.status(500).json({
      response: error,
    });
  }
};
let createAll = async (req, res) => {
  try {
    let producto = req.body;
    let create = Producto.insertMany(producto);
    return res.status(201).json({
      response: create,
    });
  } catch (error) {
    res.status(500).json({
      response: error,
    });
  }
};

export { create, createAll };
