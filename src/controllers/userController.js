const bcryptjs = require("bcryptjs");
const userService = require("../services/userService");

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res) => {
  const newUser = req.body;
  // Encriptar la contraseña
  newUser.contrasena = bcryptjs.hashSync(newUser.contrasena, 8);
  try {
    const result = await userService.registerUser(newUser);

    res.status(201).json({
      message: "Usuario creado correctamente",
      idUser: result.insertId,
    });
  } catch (error) {
    next(error);
  }
};
/*
controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    if (err) return res.json(err);

    const query = "DELETE FROM usuarios WHERE ID = ?";
    conn.query(query, [id], (err, result) => {
      if (err) return res.json(err);

      // Validar que se eliminó correctamente
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Persona no econtrada" });
        return;
      }

      console.log(result);
      res.json({ message: `Persona eliminada correctamente ${id}` });
    });
  });
};

controller.getOne = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    if (err) return res.json(err);

    const query = "SELECT * FROM usuarios WHERE ID = ?";
    conn.query(query, [id], (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al obtener usuario" });
        return;
      }

      res.json(result);
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  req.getConnection((err, conn) => {
    if (err) return res.json(err);

    const query = "UPDATE usuarios SET ? WHERE ID = ?";
    conn.query(query, [updatedUser, id], (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al actualizar usuario" });
        return;
      }

      // Validar si se actualizó correctamente
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Usuario no encontrado" });
        return;
      }

      console.log(result);
      res.json({
        message: "Usuario actualizado correctamente",
        idUser: result.ID,
      });
    });
  });
}; */

module.exports = {
  getAllUsers,
  registerUser,
};
