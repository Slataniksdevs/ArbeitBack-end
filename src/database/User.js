const connection = require("./db");

/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: int
 *          example: 1
 *        nombre:
 *          type: string
 *          example: Andres A
 *        correo_electronico:
 *          type: string
 *          example: andres@gmail.com
 *        contrasena:
 *          type: string
 *          example: 123456
 *        tipo_usuario:
 *          type: string
 *          example: psicologo
 */

const getAllUsers = (callback) => {
  const sql = "SELECT * FROM usuarios";
  connection.query(sql, (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

const createUser = (userData, callback) => {
  const sql = "INSERT INTO usuarios SET ?";
  connection.query(sql, [userData], (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

const deleteOneUser = (userId, callback) => {
  const sql = "DELETE FROM usuarios WHERE ID = ?";
  connection.query(sql, [userId], (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

const getOneUser = (userId, callback) => {
  const sql = "SELECT * FROM usuarios WHERE ID = ?";
  connection.query(sql, [userId], (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

const updateOneUser = (userId, updatedUser, callback) => {
  const sql = "UPDATE usuarios SET ? WHERE ID = ?";
  connection.query(sql, [updatedUser, userId], (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

module.exports = {
  getAllUsers,
  createUser,
  deleteOneUser,
  getOneUser,
  updateOneUser,
};
