const router = require("express").Router();
const projectController =  require("../../controllers/projectController");

router.route("/")
    .get(projectController.findAll)
    .post(projectController.create);

router
    .route("/:id")
    .get(projectController.findById)
    .put(projectController.update)
    .delete(projectController.remove);

router
  .route("/:projectId/tasks")
  .get(projectController.getProjectTask)
  .post(projectController.createProjectTask)
router
    .route("/:projectId/teammembers")
    .get(projectController.getTeamMembers)
    .post(projectController.createTeamMembers)
module.exports = router;