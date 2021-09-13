/* Replace undefined with Require of your Mongoose connection initialization method */
const initializeMongooseConnection = 'mongodb://localhost:27017/testDB';
/* Replace undefined with Require of your note entity*/
const noteModel = require('../models/Note');
/* Replace undefined with Require of your user entity*/
const userModel = require('../models/User');

module.exports = {
  initializeMongooseConnection,
  noteModel,
  userModel,
};
