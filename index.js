var express = require("express");
var bodyParser = require("body-parser");
var env = require('node-env-file');
env(__dirname + '/.env');
var spotify = require('./api/spotify');
var app = express();
var request = require('request'); // "Request" library
var nectia = {};
nectia.constants = require('./libs/constants.js');

var port = process.env.PORT || '4000';

var allowMethods = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  return next();
}

var allowCrossTokenHeader = function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "token");
  return next();
}

var token = function (req, res, next) {

  var client_id = process.env.CLIENT_ID; // Spotify app client id
  var client_secret = process.env.CLIENT_SECRET; // Spotify app secret

  // your application requests authorization
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      nectia.spotify_token = body.access_token;
      return next();
    }else{
      res.send(nectia.constants.UNAUTHORIZED);
    }
  });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowMethods);
app.use(allowCrossTokenHeader);

app.get("/api/spotify", token, function (req, res, next) {
  spotify._getAlbum(req, res, nectia);
});

app.listen(port, function () {
  console.log("Servidor escuchando en el puerto ", port);
})