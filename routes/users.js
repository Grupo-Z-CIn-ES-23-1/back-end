const router = require("express").Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: "Register a new user using provided credentials. The actual implementation may vary based on the controller logic."
 */
router.route("/register").post((req, res) => userController.create(req, res));

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login a user
 *     description: "Login a user using provided credentials. The actual implementation may vary based on the controller logic."
 */
router.route("/login").post((req, res) => userController.login(req, res));

module.exports = router;
