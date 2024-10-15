import Empleado from "../../models/Empleado.js";

let todosEmpleados = async (req, res) => {
  try {
    let todos = await Empleado.find();
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};

let cargoEmpleados = async (req, res) => {
  try {
    let query = req.params.x;
    let todos = await Empleado.find({ cargo: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {
    return res.status(500).josn({
      response: error,
    });
  }
};

let salarioEmpleados = async (req, res) => {
  try {
    let query = req.params.x;
    let todos = await Empleado.find({ salario: query });
    return res.status(200).json({
      response: todos,
    });
  } catch (error) {}
};

export { todosEmpleados, cargoEmpleados, salarioEmpleados };
