const express = require('express');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/v1', require('./api'));

module.exports = app;
