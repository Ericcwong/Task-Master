const db = require("../models");

// Defining methods for the Team Controller
module.exports = {
  findAll: function(req, res) {
    db.Team
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Team
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Team
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Team
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Team
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // getUser: async (req, res) => {
  //   const { projectId } = req.params;
  //   // awaits to find User by id and populate the teammember within the user
  //   const project = await db.Project.findById(projectId).populate("teamMembers");
  //   //writes the character in json
  //   res.status(200).json(project.teamMembers);
  //   console.log("project", project);
  // },
  // createTeamMember: async (req, res) => {
  //   const { projectId } = req.params;
  //   // Creating a new project
  //   const newTeamMember = new db.Team(req.body);
  //   // Get user
  //   const team = await db.Team.findById(projectId);
  //   // Project owner
  //   newTeamMember.members = project;
  //   //saving the project to user
  //   await newTeamMember.save();
  //   project.teamMembers.push(newTeamMember);
  //   // Saving to the user database
  //   await project.save()
  //   res.status(200).json(newTask);
  // },
};