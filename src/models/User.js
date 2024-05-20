const connection = require("../config/db");

const getAllUsers = (callback) => {
  const query = "SELECT * FROM usuarios";
  connection.query(query, (err, result) => {
    if (err) return callback(err);

    callback(null, result);
  });
};

module.exports = {
  getAllUsers,
};
