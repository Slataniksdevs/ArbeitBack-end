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
};
