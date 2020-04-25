const router = require("express").Router();
const characterRoutes = require("./characters");

// Book routes
router.use("/character", characterRoutes);

module.exports = router;
