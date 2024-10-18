import Tienda from "../../modelos/Tienda.js";

let todasTiendas = async (req, res, next) => {
  try {
    let todas = await Tienda.find();
    return res.status(200).json({
      response: todas,
    });
  } catch (error) {
    next(error);
  }
};
let nombreTiendas = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todas = await Tienda.find({ nombre: query });
    return res.status(200).json({
      response: todas,
    });
  } catch (error) {
    next(error);
  }
};
let direccionTiendas = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todas = await Tienda.find({ direccion: query });
    return res.status(200).json({
      response: todas,
    });
  } catch (error) {
    next(error);
  }
};

export { todasTiendas, nombreTiendas, direccionTiendas };
