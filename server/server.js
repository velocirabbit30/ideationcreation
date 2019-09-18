const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const projectsRoutes = require('./routes/projects');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});





app.use('/api/projects', projectsRoutes);



app.listen(3000, (err) => {
  if (err) throw new Error;
  console.log('listening on port', 3000);
})