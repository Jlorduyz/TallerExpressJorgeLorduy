import Empleado from "../../modelos/Empleado.js";

let crear = async (req, res, next) => {
  try {
    let empleado = req.body;
    let crear = await Empleado.create(empleado);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};

let crearVarios = async (req, res, next) => {
  try {
    let empleado = req.body;
    let crear = await Empleado.insertMany(empleado);
    return res.status(201).json({
      response: crear,
    });
  } catch (error) {
    next(error);
  }
};

export { crear, crearVarios };
