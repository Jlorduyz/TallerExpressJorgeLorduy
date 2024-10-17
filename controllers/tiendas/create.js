import Tienda from "../../models/Tienda.js";

let crear = async (req, res, next) => {
  try {
    let tienda = req.body;
    let crear = await Tienda.create(tienda);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};

let crearVarios = async (req, res, next) => {
  try {
    let tienda = req.body;
    let crear = await Tienda.insertMany(tienda);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};

export { crear, crearVarios };
