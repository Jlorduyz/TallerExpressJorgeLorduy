import express from "express";
import "dotenv/config.js";
import "./configuraciones/baseDeDatos.js";
import cors from "cors";
import morgan from "morgan";
import enrutadorInicial from "./Enrutadores/index.js";
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";
import bad_request_handler from "./middlewares/bad_request_handler.js";

const Servidor = express();

const PORT = process.env.PORT;

const ready = () => console.log("Servidor activo en el puerto: " + PORT);

Servidor.use(express.json());
Servidor.use(express.urlencoded({ extended: true }));
Servidor.use(cors());
Servidor.use(morgan("dev"));

Servidor.use("/api", enrutadorInicial);
Servidor.use(not_found_handler);
Servidor.use(bad_request_handler);
Servidor.use(error_handler);

Servidor.listen(PORT, ready);
