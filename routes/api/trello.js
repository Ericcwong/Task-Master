const router = require("express").Router();
const trelloApiController =  require("../../controllers/trelloApiController");


router.route("/authorize")
    .get(trelloApiController.authorize);

router.route("/callback")
    .get(trelloApiController.callback);

module.exports = router;
    