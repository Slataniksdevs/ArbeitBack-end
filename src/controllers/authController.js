const authService = require("../services/authService");

const login = async (req, res, next) => {
  const userData = req.body;
  try {
    const token = await authService.login(userData);
    const cookiesOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    // Nombre de la cookie en el navegador
    res.cookie("jwt", token, cookiesOptions);
    res.json({ message: "Inició sesión exitosamente" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
