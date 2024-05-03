require("dotenv").config(); // Obtener variables de entorno
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const connection = require("express-myconnection");
const usersRoutes = require("./routes/usersRoutes");

// Crear servidor
const app = express();

// Configuraciones
const port = process.env.PORT ?? 3000;
const dbSettings = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(connection(mysql, dbSettings, "single"));

// Rutas
app.use("/", usersRoutes);

// Escuchando el servidor
app.listen(port, () => {
  console.log(`Listening to server on port: http://127.0.0.1:${port}`);
});
