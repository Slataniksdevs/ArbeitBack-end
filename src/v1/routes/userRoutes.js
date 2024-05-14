const express = require("express");
const userController = require("../../controllers/userController");

const router = express.Router();

/**
 * @openapi
 * /api/v1/users:
 *  get:
 *    tags:
 *      - Users
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: OK
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: "#/components/schemas/User"
 *      5XX:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Algo salio mal"
 */

router
  .get("/", userController.getAllUsers)
  .post("/registrar", userController.createUser)
  .delete("/:userId", userController.deleteOneUser)
  .get("/:userId", userController.getOneUser)
  .put("/:userId", userController.updateOneUser)
  .post("/login", userController.login);

module.exports = router;
