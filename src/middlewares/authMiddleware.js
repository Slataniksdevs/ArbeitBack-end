const authService = require("../services/authService");

async function authMiddleware(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ message: "Debes iniciar sesión" });

  try {
    const result = await authService.verifyToken(token);
    req.user = result[0];
    next();
  } catch (error) {
    res.status(403).json({ message: "Tóken no válido" });
  }
}

module.exports = authMiddleware;
