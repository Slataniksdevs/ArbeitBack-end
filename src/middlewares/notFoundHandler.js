// Manejar rutas no encontradas
function notFoundHandler(req, res, next) {
  res.status(404).json({
    error: {
      message: "Not Found",
    },
  });
}

module.exports = notFoundHandler;
