const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CharacterSchema = new Schema({
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
    manastat: {
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
      type: Date
    }
});

module.exports = Character = mongoose.model("characters", CharacterSchema)