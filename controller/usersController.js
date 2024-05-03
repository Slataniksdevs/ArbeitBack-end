const controller = {};

controller.getAll = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.json(err);

    const query = "SELECT * FROM usuarios";
    conn.query(query, (err, result) => {
      if (err) return res.json(err);

      console.log(result);
      res.json(result);
    });
  });
};

controller.create = (req, res) => {
  const newUser = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.json(err);

    const query = "INSERT INTO usuarios SET ?";
    conn.query(query, [newUser], (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al crear usuario" });
        return;
      }

      console.log(result);
      res.status(201).json({
        message: "Usuario creado correctamente",
        idUser: result.ID,
      });
    });
  });
};

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
};

module.exports = controller;
