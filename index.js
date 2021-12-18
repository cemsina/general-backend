const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
const app = express();
const path = require('path');
const {
  DATABASE_URL,
  API_PATH, 
  HOST,
  CLOUD_CODE_MAIN,
  APP_ID,
  MASTER_KEY,
  DASHBOARD_PATH,
  APP_NAME,
  PORT,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  SERVER_URL
} = require('./config');

var api = new ParseServer({
  databaseURI: DATABASE_URL,
  cloud: CLOUD_CODE_MAIN,
  appId: APP_ID,
  masterKey: MASTER_KEY,
  serverURL: `${HOST}:${PORT}${API_PATH}`,
  liveQuery: {
    classNames: ['Posts', 'Comments'],
  }
});

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": SERVER_URL,
      "appId": APP_ID,
      "masterKey": MASTER_KEY,
      "appName": APP_NAME
    }
  ],
  "users": [
    {
      "user": ADMIN_USERNAME,
      "pass": ADMIN_PASSWORD
    }
  ]
}, { allowInsecureHTTP: true });

app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(API_PATH, api);
app.use(DASHBOARD_PATH, dashboard);

const httpServer = require('http').createServer(app);
httpServer.listen(PORT, function () {
  console.log('Running on port ' + PORT + '.');
});

ParseServer.createLiveQueryServer(httpServer);