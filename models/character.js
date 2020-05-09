const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CharacterSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    name: {
      type: String, 
      require: true,
      trim: true
    },
    //Whats up there good looking
    avatar: {
      type: String, 
      require: true,
      trim: true
    },
    classes: {
      type: String, 
      require: true,
      trim: true
    },
    //User STATS!!!
    healthStat: {
      type: Number, 
      require: true,
      trim: true
    },
    manaStat: {
      type: Number, 
      require: true,
      trim: true
    },
    attackStat: {
      type: Number, 
      require: true,
      trim: true
    },
    //Dates beep boop
    createdDate:{
      type: Date,
      default: Date.now
    },
    lastActiveAt: {
      type: Date,
      default: Date.now
    }
});
const Character = mongoose.model("character", CharacterSchema);
module.exports = Character;