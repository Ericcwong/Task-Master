const router = require("express").Router();
const characterRoutes = require("./characters");
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks")
const teamRoutes = require("./teams");
const userRoutes = require("./users");
// Character routes
router.use("/character", characterRoutes);

// Project routes
router.use("/project", projectRoutes);
// Task routes
router.use("/task", taskRoutes);
// Team routes
router.use("/team", teamRoutes);
// User routes
router.use("/user", userRoutes);
module.exports = router;
