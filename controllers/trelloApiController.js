var OAuth = require('oauth').OAuth

//Oauth Config
const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const appName = "TaskMaster";
const scope = 'read';
const expiration = '1hour';

const key = require("../config/keys").TRELLO_KEY;
const secret = require("../config/keys").TRELLO_OAUTH_SECRET;
// Trello redirects the user here after authentication
const loginCallback = `https://${process.env.PROJECT_DOMAIN}.glitch.me/callback`;

// You should have {"token": "tokenSecret"} pairs in a real application
// Storage should be more permanent (redis would be a good choice)
const oauth_secrets = {};
const oauth = new OAuth(requestURL, accessURL, key, secret, "1.0A", loginCallback, "HMAC-SHA1")

module.exports = {

 authorize: function(request, response) {
  oauth.getOAuthRequestToken(function(error, token, tokenSecret, results){
    oauth_secrets[token] = tokenSecret;
    response.redirect(`${authorizeURL}?oauth_token=${token}&name=${appName}&scope=${scope}&expiration=${expiration}`);
  });
},

callback: function(req, res) {
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
}
}