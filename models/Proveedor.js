import { Schema, model } from "mongoose";

let collection = "proveedores";

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

let Proveedor = model(collection, schema);

export default Proveedor;
