// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
// File calls
const users = require("./routes/api/users");
const routes = require("./routes");
const trello = require("./routes/api/trello");
const routes = require("./routes")
const app = express();
var OAuth = require('oauth').OAuth
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
let db = require("./config/keys").mongoURI;
if (process.env.NODE_ENV === "production") {
  db = process.env.MONGODB_URI;
} else {
  // DB Config
  db = require("./config/keys").mongoURI;
}
// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes

app.use("/api/users", users);
app.use("/api/trello", trello);
app.use(routes);
//app.use("/api/tasks", tasks);
//app.use("/api/projects", projects);

// Serve static assets (build folder) if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Connect to the Mongo DB
// mongoose
//   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
