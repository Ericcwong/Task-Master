const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//Add routes HERE

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://project3:password1@ds113736.mlab.com:13736/heroku_96zb71pm",
{
  useNewUrlParser: true,
  useUnifiedTopology: true
},
() => console.log("Connected to MongoDB!")
);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
