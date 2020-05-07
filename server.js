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
const routes = require("./routes")
const app = express();
var OAuth = require('oauth').OAuth
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//Oauth Config
const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const appName = "Trello OAuth Example";
const scope = 'read';
const expiration = '1hour';

const key = require("./config/keys").TRELLO_KEY;
const secret = require("./config/keys").TRELLO_OAUTH_SECRET;

// Trello redirects the user here after authentication
const loginCallback = `https://${process.env.PROJECT_DOMAIN}/callback`;

// You should have {"token": "tokenSecret"} pairs in a real application
// Storage should be more permanent (redis would be a good choice)
const oauth_secrets = {};

const oauth = new OAuth(requestURL, accessURL, key, secret, "1.0A", loginCallback, "HMAC-SHA1")

const login = function(request, response) {
  oauth.getOAuthRequestToken(function(error, token, tokenSecret, results){
    oauth_secrets[token] = tokenSecret;
    response.redirect(`${authorizeURL}?oauth_token=${token}&name=${appName}&scope=${scope}&expiration=${expiration}`);
  });
};

var callback = function(req, res) {
  const query = url.parse(req.url, true).query;
  const token = query.oauth_token;
  const tokenSecret = oauth_secrets[token];
  const verifier = query.oauth_verifier;
  oauth.getOAuthAccessToken(token, tokenSecret, verifier, function(error, accessToken, accessTokenSecret, results){
    // In a real app, the accessToken and accessTokenSecret should be stored
    oauth.getProtectedResource("https://api.trello.com/1/members/me", "GET", accessToken, accessTokenSecret, function(error, data, response){
      console.log(accessToken)
      console.log(accessTokenSecret)
      // Now we can respond with data to show that we have access to your Trello account via OAuth
      res.send(data)
    });
  });
};

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.get("/trellologin", function (request, response) {
  console.log(`GET '/login' 🤠 ${Date()}`);
  login(request, response);
});

app.get("/trellocallback", function (request, response) {
  console.log(`GET '/callback' 🤠 ${Date()}`);
  callback(request, response);
});
app.use("/api/users", users);
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
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
