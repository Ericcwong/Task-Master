const router = require("express").Router();
const teamController =  require("../../controllers/teamController");

router.route("/")
    .get(teamController.findAll)
    .post(teamController.create);

router
    .route("/:id")
    .get(teamController.findById)
    .put(teamController.update)
    .delete(teamController.remove);
    
module.exports = router;