const express = require("express");
const controller = require("../../controllers/userController");

const router = express.Router();

router.get("/", controller.getAllUsers); /* 
router.post("/registrar", controller.create);
router.delete("/:id", controller.delete);
router.get("/:id", controller.getOne);
router.put("/:id", controller.update); */

module.exports = router;
