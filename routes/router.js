const router = require("express").Router();

// calling routes
const userRouter = require("./users");

router.use("/", userRouter);

module.exports = router;
