import Tienda from "../../models/Tienda.js";

let todasTiendas = async (req, res) => {
  try {
    let todas = await Tienda.find();
    return res.status(200).json({
      response: todas,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};
let nombreTiendas = async (req, res) => {
  try {
    let query = req.params.x;
    let todas = await Tienda.find({ nombre: query });
    return res.status(200).json({
      response: todas,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};
let direccionTiendas = async (req, res) => {
  try {
    let query = req.params.x;
    let todas = await Tienda.find({ direccion: query });
    return res.status(200).json({
      response: todas,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};

export { todasTiendas, nombreTiendas, direccionTiendas };
