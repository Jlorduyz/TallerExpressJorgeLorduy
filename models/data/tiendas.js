import "dotenv/config.js";
import "../../config/database.js";
import Tienda from "../Tienda.js";

let tiendas = [
  {
    nombre: "Supermercado El Centro",
    direccion: "Calle 45 Norte 101",
    telefono: 3112345678,
  },
  {
    nombre: "Supermercado La Esquina",
    direccion: "Avenida Central 203",
    telefono: 3009876543,
  },
  {
    nombre: "Supermercado Los Andes",
    direccion: "Carrera 18 Sur 57",
    telefono: 3151234567,
  },
  {
    nombre: "Supermercado del Norte",
    direccion: "Calle 9 Oeste 29",
    telefono: 3107654321,
  },
  {
    nombre: "Supermercado San Juan",
    direccion: "Carrera 12 Norte 78",
    telefono: 3021234567,
  },
];

Tienda.insertMany(tiendas);
