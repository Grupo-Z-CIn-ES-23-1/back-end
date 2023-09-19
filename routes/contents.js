const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const floodController = require("../controllers/floodController");

router.route("/flood").get(verifyToken, floodController.getFloodData);

module.exports = router;
