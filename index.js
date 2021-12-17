var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  //databaseURI: 'postgres://postgres:1234@localhost:5432/parsedev',
  databaseURI: 'mongodb+srv://admin:Qq1234567890@cluster0.1lsk5.mongodb.net/backend?retryWrites=true&w=majority',
  cloud: './cloud/main.js',
  appId: 'APPLICATION_ID',
  masterKey: 'MASTER_KEY',
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse'
});


app.use('/parse', api);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});