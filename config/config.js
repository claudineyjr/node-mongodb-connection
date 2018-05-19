const mongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://localhost:27017';
const serverPort = 3000;


module.exports = {
  mongoClient,
  mongoUrl,
  serverPort,
};