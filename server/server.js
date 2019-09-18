const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, (err) => {
  if (err) throw new Error;
  console.log('listening on port', 3000);
})