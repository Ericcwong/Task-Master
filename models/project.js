const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'task'
  }],

  date: { type: Date, default: Date.now }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
