const db = require("../models");

// Defining methods for the User Controller
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUserProject: async (req, res) => {
    const { userId } = req.params;
    // awaits to find User by id and populate the characters within the user
    const user = await db.User.findById(userId).populate("projects");
    //writes the character in json
    res.status(200).json(user.projects);
    console.log("user", user);
  },
  createUserProject: async (req, res) => {
    const { userId } = req.params;
    // Creating a new project
    const newProject = new db.Project(req.body);
    // Get user
    const user = await db.User.findById(userId);
    // Project owner
    newProject.owner = user;
    //saving the project to user
    await newProject.save();
    user.projects.push(newProject);
    // Saving to the user database
    await user.save()
    res.status(200).json(newProject);
  },
  // removeUserProject: async (req, res) => {
  //   const { projectId } = 
  // },
  getUserCharacter: async (req, res) => {
    const { userId } = req.params;
    // awaits to find User by id and populate the characters within the user
    const user = await db.User.findById(userId).populate("characters");
    //writes the character in json
    res.status(200).json(user.characters);
    console.log("user", user);
  },
  createUserCharacter: async (req, res) => {
    const { userId } = req.params;
    // Creating a new project
    const newCharacter = new db.Character(req.body);
    // Get user
    const user = await db.User.findById(userId);
    // Project owner
    newCharacter.user = user;
    //saving the project to user
    await newCharacter.save();
    user.characters.push(newCharacter);
    // Saving to the user database
    await user.save()
    res.status(200).json(newCharacter);
  },
  // removeUserCharacter: function(req, res){
  //   db.User.characters
  //   .findById({ _id: req.params.id })
  //   .then(dbModel => dbModel.remove())
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  
  // },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};