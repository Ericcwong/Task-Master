const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    validate: [
      ({ length }) => length >= 8,
      "Password should be at least 8 characters."
    ],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  characters:[{
    type: Schema.Types.ObjectId,
    ref: "character"
  }],
  projects:[{
    type: Schema.Types.ObjectId,
    ref: "project"
  }]
});

module.exports = User = mongoose.model("users", UserSchema);