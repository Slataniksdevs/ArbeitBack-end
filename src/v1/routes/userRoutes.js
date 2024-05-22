const express = require("express");
const userController = require("../../controllers/userController");
const authMiddleware = require("../../middlewares/authMiddleware");

const router = express.Router();

router
  .get("/", authMiddleware, userController.getAllUsers)
  .post("/registrar", userController.registerUser); /*
router.delete("/:id", controller.delete);
router.get("/:id", controller.getOne);
router.put("/:id", controller.update); */

module.exports = router;
