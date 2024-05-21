// Manejar los errores globales
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Error interno del servidor",
    },
  });
}

module.exports = errorHandler;
