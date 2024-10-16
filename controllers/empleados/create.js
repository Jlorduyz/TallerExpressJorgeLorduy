import Empleado from "../../models/Empleado.js";

let create = async (req, res) => {
  try {
    let empleado = req.body;
    let create = await Empleado.create(empleado);
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
    let empleado = req.body;
    let create = Empleado.insertMany(empleado);
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
