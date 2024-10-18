import { Schema, model } from "mongoose";

let coleccion = "empleados";

let schema = Schema(
  {
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    salario: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

let Empleado = model(coleccion, schema);

export default Empleado;
