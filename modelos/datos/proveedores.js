import "dotenv/config.js";
import "../../config/database.js";
import Proveedor from "../Proveedor.js";

let proveedores = [
  {
    nombre: "Distribuidora Alimentos del Norte",
    marcasSuministradas: ["Plumrose", "Polar"],
    telefono: 3001234567,
    horasEntrega: "08:00",
  },
  {
    nombre: "Suministros Colombia",
    marcasSuministradas: ["Alpina", "Colombina"],
    telefono: 3119876543,
    horasEntrega: "07:00",
  },
  {
    nombre: "Proveedora Central",
    marcasSuministradas: ["Postobón", "Ramo"],
    telefono: 3156543210,
    horasEntrega: "09:00",
  },
  {
    nombre: "Comercializadora Andina",
    marcasSuministradas: ["Empresas Polar", "Savoy"],
    telefono: 3201239876,
    horasEntrega: "08:00",
  },
  {
    nombre: "Importadora del Pacífico",
    marcasSuministradas: ["Harina Pan", "Plumrose"],
    telefono: 3124567890,
    horasEntrega: "07:00",
  },
  {
    nombre: "Alimentos y Bebidas Latinas",
    marcasSuministradas: ["Nutrimix", "Postobón"],
    telefono: 3019871234,
    horasEntrega: "09:00",
  },
];

Proveedor.insertMany(proveedores);
