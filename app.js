require("dotenv").config(); // Obtener variables de entorno
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const v1UserRouter = require("./src/v1/routes/userRoutes");

// Crear servidor
const app = express();

// Configuraciones
const PORT = process.env.PORT ?? 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// Para eliminar el cache y no se pueda volver con el botón back luego de hacer logout
/* app.use(function(req, res, next) {
  if(!req.user)
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  next()
}) */

// Rutas
app.use("/", v1UserRouter);

// Escuchando el servidor
app.listen(PORT, () => {
  console.log(`Listening to server on port: http://127.0.0.1:${PORT}`);
});
