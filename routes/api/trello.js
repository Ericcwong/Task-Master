const router = require("express").Router();
const TrelloController = require("../../controllers/trelloApiController");

router.route("/")
    .get(TrelloController.getBoards);
    