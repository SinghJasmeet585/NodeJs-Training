let express = require('express');
const api = require('./api/v1/routes');
var bodyParser = require('body-parser');
let app = express();

// const bodyPerser = bodyParser.json();
//write your logic here
app.use(bodyParser.json());
app.use('/api/v1', api);

module.exports = app;
