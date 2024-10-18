import { Schema, model } from "mongoose";

let coleccion = "productos";

let schema = Schema(
  {
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    tipo: { type: String, required: true },
    precio: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

let Producto = model(coleccion, schema);

export default Producto;
