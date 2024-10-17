import Promocion from "../../models/Promocion.js";

let crear = async (req, res, next) => {
  try {
    let promociones = req.body;
    let crear = await Promocion.create(promociones);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};
let crearVarios = async (req, res, next) => {
  try {
    let promociones = req.body;
    let crear = await Promocion.insertMany(promociones);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};

export { crear, crearVarios };
