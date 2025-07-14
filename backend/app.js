const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('first response');
  next();
})

app.use((req, res, next) => {
  res.send('second response');
})

module.exports = app;
