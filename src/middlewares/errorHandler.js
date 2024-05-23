// Manejar los errores globales
function errorHandler(err, req, res, next) {
  console.error(err.stack); // Para depuración en el servidor

  if (err.message === "Error al iniciar sesión: Correo electrónico incorrecto")
    return res.status(401).json({
      error: {
        message:
          err.message || "Error al iniciar sesión. Credenciales no válidas",
      },
    });

  res.status(err.status || 500).json({
    error: {
      message: err.message || "Error interno del servidor",
    },
  });
}

module.exports = errorHandler;
