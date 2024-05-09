const userService = require("../services/userServices");

getAllUsers = (req, res) => {
  userService.getAllUsers((err, results) => {
    if (err)
      return res.status(500).json({ error: `Error de servidor: ${err}` });

    res.json(results);
  });
};

createUser = (req, res) => {
  const userData = req.body;
  userService.createUser(userData, (err, results) => {
    if (err)
      return res.status(500).json({ error: `Error de servidor: ${err}` });

    res.json(results);
  });
};

deleteOneUser = (req, res) => {
  const { userId } = req.params;
  userService.deleteOneUser(userId, (err, results) => {
    if (err)
      return res.status(500).json({ error: `Error de servidor: ${err}` });

    // Validar que se eliminó correctamente
    if (results.affectedRows === 0)
      return res.status(404).json({ error: "Persona no econtrada" });

    res.json(results);
  });
};

getOneUser = (req, res) => {
  const { userId } = req.params;
  userService.getOneUser(userId, (err, results) => {
    if (err)
      return res.status(500).json({ error: `Error de servidor: ${err}` });

    res.json(results);
  });
};

updateOneUser = (req, res) => {
  const { userId } = req.params;
  const updatedUser = req.body;

  userService.updateOneUser(userId, updatedUser, (err, results) => {
    if (err)
      return res.status(500).json({ error: `Error de servidor: ${err}` });

    // Validar si se actualizó correctamente
    if (results.affectedRows === 0)
      return res.status(404).json({ error: "Usuario no econtrado" });

    console.log(results);
    res.json(results);
  });
};

module.exports = {
  getAllUsers,
  createUser,
  deleteOneUser,
  getOneUser,
  updateOneUser,
};
