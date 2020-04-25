const router = require("express").Router();
const characterController =  require("../../controllers/characterController");
// const Character = require("../../models/character");

// //(CREATE) Create a new character
// router.post("/create-character", (req, res) => {
//     let name = req.body.name
//     let avatar = req.body.avatar
//     let classes = req.body.class
//     let healthStat = req.body.healthStat
//     let manaStat = req.body.manaStat
//     let attackStat = req.body.attackStat
    
//     let newCharacter = new Character({ 
//         name,
//         avatar,
//         classes,
//         healthStat,
//         manaStat,
//         attackStat
//     });
//     newCharacter.save()
//         .then(() => res.json("Character Created!"))
//         .catch(err => res.status(400).json("Error: " + err))

// });
// //(READ) Displaying all characters 
// router.get("/", (req, res) => {
//     Character.find()
//         .then(character => res.json(character))
//         .catch(err => res.status(400).json("Error: " + err));
// });
// //(UPDATE)

// //(DELETE) Delete an character
// router.delete("/remove-character/:id", (req, res) => {
//     Character.findByIdAndRemove({_id: req.params.id})
//         .then((character) => {
//             res.send(character);
//         })
//         .catch(err => res.status(400).json("Error: " + err))
// });

router.route("/")
    .get(characterController.findAll)
    .post(characterController.create);

router
    .route("/:id")
    .get(characterController.findById)
    .put(characterController.update)
    .delete(characterController.remove);
module.exports = router;