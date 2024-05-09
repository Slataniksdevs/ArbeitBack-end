require("dotenv").config(); // Obtener variables de entorno
const express = require("express");
const cors = require("cors");
// const dbConnection = require("./src/database/db");
const v1UserRouter = require("./src/v1/routes/userRoutes");

// Crear servidor
const app = express();

// Configuraciones
const PORT = process.env.PORT ?? 3000;

// Middleware
app.use(express.json());
app.use(cors());
// app.use(dbConnection);

// Rutas
app.use("/api/v1/users", v1UserRouter);

// Escuchando el servidor
app.listen(PORT, () => {
  console.log(`Listening to server on port: http://127.0.0.1:${PORT}`);
});
