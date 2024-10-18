import { Schema, model } from "mongoose";

let coleccion = "tiendas";

let schema = Schema(
  {
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

let Tienda = model(coleccion, schema);

export default Tienda;
