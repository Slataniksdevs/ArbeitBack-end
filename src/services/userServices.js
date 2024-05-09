const User = require("../database/User");

const getAllUsers = (callback) => {
  User.getAllUsers((err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

const createUser = (userData, callback) => {
  User.createUser(userData, (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

const deleteOneUser = (userId, callback) => {
  User.deleteOneUser(userId, (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

const getOneUser = (userId, callback) => {
  User.getOneUser(userId, (err, results) => {
    if (err) return callback(err);

    callback(null, results);
  });
};

const updateOneUser = (userId, updatedUser, callback) => {
  User.updateOneUser(userId, updatedUser, (err, results) => {
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
