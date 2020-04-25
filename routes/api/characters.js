const router = require("express").Router();
const Character = require("../../models/character");

//(CREATE) Create a new character
router.route("/create-character").post((req, res) => {
    let name = req.body.name
    let avatar = req.body.avatar
    let classes = req.body.class
    let healthStat = req.body.healthStat
    let manaStat = req.body.manaStat
    let attackStat = req.body.attackStat
    
    let newCharacter = new Character({ 
        name,
        avatar,
        classes,
        healthStat,
        manaStat,
        attackStat
    });
    newCharacter.save()
        .then(() => res.json("Character Created!"))
        .catch(err => res.status(400).json("Error is: " + err))

});
//(READ) Displaying all characters 
router.route("/").get((req, res) => {
    Character.find()
        .then(character => res.json(character))
        .catch(err => res.status(400).json("Error " + err));
});
//(UPDATE)

//(DELETE) Delete an character
router.route("/remove-character").p
module.exports = router;