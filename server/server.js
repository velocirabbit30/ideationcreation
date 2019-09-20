const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.js');
// const db = require('../server/db/db.js')
const projectsRoutes = require('./routes/projects');
const techRoutes = require('./routes/tech');
// const graveyardRoutes = require('./routes/graveyard');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(cookieParser())

<<<<<<< Updated upstream
=======

app.use(bodyParser.json());
>>>>>>> Stashed changes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/api/auth', authRouter)

// routes
app.use('/api/tech', techRoutes)
app.use('/api/projects', projectsRoutes);

// global error handler
app.use((req, res, next, err) => {
res.status(400).json({
  errorMessage: 'no route exists that handles your request',
  error: err
});
})


// routes
app.use('/api/tech', techRoutes);
app.use('/api/projects', projectsRoutes);
// app.use('/api/graveyard', graveyardRoutes);
// global error handler
app.use(function (err, req, res, next) {
res.status(400).json({
  errorMessage: 'no route exists that handles your request',
  error: err
});
})

app.listen(3000, (err) => {
  if (err) throw new Error;
  console.log('listening on port', 3000);
})