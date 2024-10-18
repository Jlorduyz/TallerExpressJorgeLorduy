import { Schema, model } from "mongoose";

let coleccion = "proveedores";

let schema = Schema(
  {
    nombre: { type: String, required: true },
    marcasSuministradas: { type: [String], required: true },
    telefono: { type: Number, required: true },
    horasEntrega: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let Proveedor = model(coleccion, schema);

export default Proveedor;
