const jwt = require("jsonwebtoken");
const userService = require("./userService");

const login = async (userData) => {
  try {
    const result = await userService.findByEmail(userData);
    console.log(result);

    // Crear el jwt
    const token = jwt.sign({ id: result[0].ID }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIME_EXPIRE,
    });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Obtener el usuario asociado al token
    const user = await userService.getOneUser(decoded.id);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  login,
  verifyToken,
};
