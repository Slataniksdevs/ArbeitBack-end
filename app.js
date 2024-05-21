require("dotenv").config(); // Obtener variables de entorno
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const v1UserRouter = require("./src/v1/routes/userRoutes");
const v1AuthRouter = require("./src/v1/routes/authRoutes");
const errorHandler = require("./src/middlewares/errorHandler");
const notFoundHandler = require("./src/middlewares/notFoundHandler");

// Crear servidor
const app = express();

// Configuraciones
const PORT = process.env.PORT ?? 3000;

// Middlewares para parsear JSON y manejar cookies
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// Para eliminar el cache y no se pueda volver con el botón back luego de hacer logout
/* app.use(function(req, res, next) {
  if(!req.user)
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  next()
}) */

// Rutas
app.use("/", v1UserRouter);
app.use("/auth", v1AuthRouter);

// Middlewares para manejo de errores
app.use(notFoundHandler);
app.use(errorHandler);

// Escuchando el servidor
app.listen(PORT, () => {
  console.log(`Listening to server on port: http://127.0.0.1:${PORT}`);
});
