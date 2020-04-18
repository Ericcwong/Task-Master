const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
