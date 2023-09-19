const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const floodController = require("../controllers/floodController");

/**
 * @swagger
 * /contents/flood:
 *   get:
 *     summary: Retrieve flood data based on location
 *     description: "Retrieve information about water levels of nearby rivers based on the provided location (latitude, longitude). This data is fetched through a proxy API."
 *     parameters:
 *       - in: query
 *         name: latitude
 *         required: true
 *         description: Latitude of the location
 *         schema:
 *           type: number
 *           format: float
 *       - in: query
 *         name: longitude
 *         required: true
 *         description: Longitude of the location
 *         schema:
 *           type: number
 *           format: float
 *     security:
 *       - BearerAuth: []
 */
router.route("/flood").get(verifyToken, floodController.getFloodData);

module.exports = router;
