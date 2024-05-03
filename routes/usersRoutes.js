const express = require("express");
const controller = require("../controller/usersController");

const router = express.Router();

router.get("/", controller.getAll);
router.post("/registrar", controller.create);
router.delete("/:id", controller.delete);
router.get("/:id", controller.getOne);
router.put("/:id", controller.update);

module.exports = router;
