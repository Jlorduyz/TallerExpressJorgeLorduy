import Tienda from "../../models/Tienda.js";

let create = async (req, res) => {
  try {
    let tienda = req.body;
    let create = await Tienda.create(tienda);
    return res.status(201).json({
      response: create,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};

let createAll = async (req, res) => {
  try {
    let tienda = req.body;
    let create = await Tienda.insertMany(tienda);
    return res.status(201).json({
      response: create,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};

export { create, createAll };
