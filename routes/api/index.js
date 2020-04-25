const router = require("express").Router();
const characterRoutes = require("./characters");

// Book routes
router.use("/books", characterRoutes);

module.exports = router;
