const User = require("../models/User");

const getAllUsers = (callback) => {
  User.getAllUsers((err, result) => {
    if (err) return callback(err);

    callback(null, result);
  });
};

module.exports = {
  getAllUsers,
};
