const connection = require("../config/db");

const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios";

    connection.query(query, (err, result) => {
      if (err) return reject(err);
      if (result.length === 0)
        return reject(new Error("No se encontró ningún usuario"));

      resolve(result);
    });
  });
};

const registerUser = async (newUser) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO usuarios SET ?";

    connection.query(query, [newUser], (err, result) => {
      if (err) return reject(err);

      resolve(result);
    });
  });
};

const getOneUser = async (userId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios WHERE ID = ?";

    connection.query(query, [userId], (err, result) => {
      if (err) return reject(err);

      resolve(result);
    });
  });
};

// Autenticación de usuario
const findByEmail = async (userData) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios WHERE correo_electronico = ?";

    connection.query(query, [userData.correo_electronico], (err, result) => {
      if (err) return reject(err);

      resolve(result);
    });
  });
};

module.exports = {
  getAllUsers,
  registerUser,
  findByEmail,
  getOneUser,
};
