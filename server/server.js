const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const authRouter = require('./routes/auth.js');
// const db = require('../server/db/db.js')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(bodyParser.json())
app.use(cookieParser())


app.use('/api/auth', authRouter)

app.use((error, req, res, next) => {
  // make this more specific so I am not just dumping the entire error
  res.status(400).send(error);
});

app.listen(3000, (err) => {
  if (err) throw new Error;
  console.log('listening on port', 3000);
})