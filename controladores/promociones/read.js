import Promocion from "../../modelos/Promocion.js";

let todasPromociones = async (req, res, next) => {
  try {
    let todos = await Promocion.find();
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};
let marcaPromociones = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todos = await Promocion.find({ marca: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};
let supermercadosPromociones = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todos = await Promocion.find({
      linea_supermercados: query,
    });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};

export { todasPromociones, marcaPromociones, supermercadosPromociones };
