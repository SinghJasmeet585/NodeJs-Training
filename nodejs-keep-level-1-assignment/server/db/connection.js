// write your db connection code here
const mongoose = require('mongoose');
const { initializeMongooseConnection } = require('../modules');
mongoose
  .connect(initializeMongooseConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('connected to mongoose');
  })
  .catch(err => {
    console.log(err);
  });

module.exports = mongoose;
