const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { 
    type: String, required: true 
  },
  date: {
    type: Date, default: Date.now 
  },
  members: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
