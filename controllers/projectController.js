const db = require("../models");

// Defining methods for the Project Controller
module.exports = {
  findAll: function(req, res) {
    db.Project
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Project
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getProjectTask: async (req, res) => {
    const { projectId } = req.params;
    // awaits to find User by id and populate the characters within the user
    const project = await db.Project.findById(projectId).populate("tasks");
    //writes the character in json
    res.status(200).json(project.tasks);
    console.log("project", project);
  },
  //Creating a (singular) Task and putting it into the Projects task array
  createProjectTask: async (req, res) => {
    const { projectId } = req.params;
    // Creating a new project
    const newTask = new db.Task(req.body);
    // Get user
    const project = await db.Project.findById(projectId);
    // Project owner
    newTask.project = project;
    //saving the project to user
    await newTask.save();
    project.tasks.push(newTask);
    // Saving to the user database
    await project.save()
    res.status(200).json(newTask);
  },
  getTeamMembers: async (req, res) => {
    const { projectId } = req.params;
    // awaits to find User by id and populate the characters within the user
    const project = await db.Project.findById(projectId).populate("teamMembers");
    //writes the character in json
    res.status(200).json(project.teamMembers);
    console.log("project", project);
  },
  //Creating a (singular) Task and putting it into the Projects task array
  createTeamMembers: async (req, res) => {
    const { projectId } = req.params;
    // Creating a new project
    const newTeamMember = await db.User.findById()
    // Get user
    const project = await db.Project.findById(projectId);
    // Project owner
    newTeamMember.project = project;
    //saving the project to user
    await newTeamMember.save();
    project.teamMembers.push(newTeamMember);
    // Saving to the user database
    await project.save()
    res.status(200).json(newTeamMember);
  },
  update: function(req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //Removing certain projects
  remove: async function(req, res) {
    const project = await db.Project.findById({_id: req.params.id});
    const ownerId = project.owner;
    const owner = await db.User.findById(ownerId);
    await project.remove();
    owner.projects.pull(project)
    await owner.save();
    res.status(200).json( {success: true});
  }
    // getTeam: async (req, res) => {
  //   const { projectId } = req.params;
  //   // awaits to find User by id and populate the team within the user
  //   const project = await db.Project.findById(projectId).populate("teams");
  //   //writes the character in json
  //   res.status(200).json(project.teams);
  //   console.log("project", project);
  // },
  // createTeam: async (req, res) => {
  //   const { projectId } = req.params;
  //   // Creating a new project
  //   const newTeam = new db.Team(req.body);
  //   // Get user
  //   const project = await db.Project.findById(projectId);
  //   // Project owner
  //   newTeam.members = project;
  //   //saving the project to user
  //   await newTeam.save();
  //   project.teams.push(newTeam);
  //   // Saving to the user database
  //   await project.save()
  //   res.status(200).json(newTask);
  // },
};