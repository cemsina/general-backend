require('dotenv').config();
module.exports = {
    APP_NAME: process.env.APP_NAME || 'MyApp',
    HOST: process.env.HOST || 'http://localhost',
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:1337/api',
    API_PATH: process.env.API_PATH || '/api',
    DASHBOARD_PATH: process.env.DASHBOARD_PATH || '/dashboard',
    PORT: process.env.PORT || 1337,
    CLOUD_CODE_MAIN: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
    APP_ID: process.env.APP_ID || 'APP_ID',
    MASTER_KEY: process.env.MASTER_KEY || 'MASTER_KEY',
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/dev',
    ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'admin',
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || '1234'
}