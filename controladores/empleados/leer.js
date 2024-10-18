import Empleado from "../../modelos/Empleado.js";

let todosEmpleados = async (req, res, next) => {
  try {
    let todos = await Empleado.find();
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};

let cargoEmpleados = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todos = await Empleado.find({ cargo: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};

let salarioEmpleados = async (req, res, next) => {
  try {
    let query = req.params.x;
    let todos = await Empleado.find({ salario: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    next(error);
  }
};

export { todosEmpleados, cargoEmpleados, salarioEmpleados };
