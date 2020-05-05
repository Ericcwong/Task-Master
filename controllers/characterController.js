const db = require("../models");

// Defining methods for the Character Controller
module.exports = {
  findAll: function(req, res) {
    db.Character
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Character
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Character
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Character
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: async function(req, res) {
    const character = await db.Character.findById({_id: req.params.id});
    const userId = character.user;
    const user = await db.User.findById(userId);
    await character.remove();
    user.characters.pull(character)
    await user.save();
    res.status(200).json( {success: true});
  }
};