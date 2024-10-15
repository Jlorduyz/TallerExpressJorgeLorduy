import "dotenv/config.js";
import "../../config/database.js";
import Empleado from "../Empleado.js";

let empleados = [
  {
    nombre: "Carlos Pérez",
    cargo: "Gerente de Ventas",
    salario: 4500,
  },
  {
    nombre: "Ana Ramírez",
    cargo: "Cajera",
    salario: 1500,
  },
  {
    nombre: "Luis Gómez",
    cargo: "Supervisor de Inventarios",
    salario: 3200,
  },
  {
    nombre: "Sofía Torres",
    cargo: "Vendedora",
    salario: 1800,
  },
  {
    nombre: "Mario López",
    cargo: "Encargado de Bodega",
    salario: 2700,
  },
  {
    nombre: "Carmen Gutiérrez",
    cargo: "Recepcionista",
    salario: 1600,
  },
  {
    nombre: "Pedro Castillo",
    cargo: "Jefe de Seguridad",
    salario: 3500,
  },
  {
    nombre: "Isabel Fuentes",
    cargo: "Auxiliar de Limpieza",
    salario: 1200,
  },
  {
    nombre: "Jorge Martínez",
    cargo: "Contador",
    salario: 4000,
  },
  {
    nombre: "Mónica Vargas",
    cargo: "Asistente Administrativo",
    salario: 2200,
  },
  {
    nombre: "Ricardo Sánchez",
    cargo: "Gerente de Logística",
    salario: 4800,
  },
  {
    nombre: "Paula Rivera",
    cargo: "Supervisora de Caja",
    salario: 2500,
  },
  {
    nombre: "Alejandro Méndez",
    cargo: "Repartidor",
    salario: 1700,
  },
  {
    nombre: "Laura Ortiz",
    cargo: "Encargada de Atención al Cliente",
    salario: 2300,
  },
  {
    nombre: "Héctor Morales",
    cargo: "Auxiliar de Inventarios",
    salario: 1900,
  },
];

Empleado.insertMany(empleados);
