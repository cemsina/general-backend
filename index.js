var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
const path = require('path');
require('dotenv').config();

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:1337';
const API_PATH = process.env.API_PATH || '/api'
const PORT = process.env.PORT || 1337;

var api = new ParseServer({
  databaseURI: process.env.DATABASE_URL || 'mongodb://localhost:27017/dev',
  //databaseURI: 'mongodb+srv://admin:Qq1234567890@cluster0.1lsk5.mongodb.net/backend?retryWrites=true&w=majority',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'APPLICATION_ID',
  masterKey: process.env.MASTER_KEY || 'MASTER_KEY',
  serverURL: `${SERVER_URL}${API_PATH}`,
  liveQuery: {
    classNames: ['Posts', 'Comments'],
  },
});

app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(API_PATH, api);

const httpServer = require('http').createServer(app);
httpServer.listen(PORT, function () {
  console.log('Running on port ' + PORT + '.');
});

ParseServer.createLiveQueryServer(httpServer);