const express = require("express");
const userController = require("../../controllers/userController");

const router = express.Router();

router
  .get("/", userController.getAllUsers)
  .post("/registrar", userController.registerUser); /*
router.delete("/:id", controller.delete);
router.get("/:id", controller.getOne);
router.put("/:id", controller.update); */

module.exports = router;
