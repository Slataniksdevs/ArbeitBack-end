const User = require("../models/User");

const getAllUsers = async () => {
  try {
    return await User.getAllUsers();
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
    return await User.findByEmail(userData);
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
