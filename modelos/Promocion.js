import { Schema, model } from "mongoose";

let collection = "promociones";

let schema = Schema(
  {
    marca: { type: String, required: true },
    fecha: { type: Date, required: true },
    linea_supermercados: { type: String, required: true },
    descripcion: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let Promocion = model(collection, schema);

export default Promocion;
