const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userService = require("./userService");

const login = async (userData) => {
  try {
    const result = await userService.findByEmail(userData);
    const isPasswordValid = await bcryptjs.compare(
      userData.contrasena,
      result[0].contrasena
    );

    if (result.length === 0 || !isPasswordValid)
      throw new Error("Correo electrónico y/o contraseña incorrectas");

    // Crear el jwt
    const token = jwt.sign({ id: result[0].ID }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIME_EXPIRE,
    });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  login,
};
