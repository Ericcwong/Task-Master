const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tasks: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'task'
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  teamMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Project = mongoose.model("project", ProjectSchema);

