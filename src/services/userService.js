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

module.exports = {
  getAllUsers,
  registerUser,
};
