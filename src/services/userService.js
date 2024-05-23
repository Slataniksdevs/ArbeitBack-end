const bcryptjs = require("bcryptjs");
const User = require("../models/User");

const getAllUsers = async () => {
  try {
    const result = await User.getAllUsers();
    if (result.length === 0) throw new Error("No se encontró ningún usuario");

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const registerUser = async (newUser) => {
  try {
    return await User.registerUser(newUser);
  } catch (error) {
    throw new Error(`Error al crear el usuario: ${error.message}`);
  }
};

const getOneUser = async (userId) => {
  try {
    const result = await User.getOneUser(userId);
    if (result.length === 0) throw new Error(`No se encontró el usuario`);

    return result;
  } catch (error) {
    throw new Error(`Error al obtener datos del usuario: ${error.message}`);
  }
};

// Autenticación de usuario
const findByEmail = async (userData) => {
  try {
    const result = await User.findByEmail(userData);
    if (result.length === 0) throw new Error("Correo electrónico incorrecto");

    const isPasswordValid = await bcryptjs.compare(
      userData.contrasena,
      result[0].contrasena
    );
    if (!isPasswordValid) throw new Error("Contraseña incorrecta");

    return result;
  } catch (error) {
    throw new Error(`Error al iniciar sesión: ${error.message}`);
  }
};

module.exports = {
  getAllUsers,
  registerUser,
  findByEmail,
  getOneUser,
};
