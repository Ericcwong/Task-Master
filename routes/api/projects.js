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
    
module.exports = router;