const express = require("express");
const userController = require("../../controllers/userController");

const router = express.Router();

router
  .get("/", userController.getAllUsers)
  .post("/registrar", userController.createUser)
  .delete("/:userId", userController.deleteOneUser)
  .get("/:userId", userController.getOneUser)
  .put("/:userId", userController.updateOneUser);

module.exports = router;
