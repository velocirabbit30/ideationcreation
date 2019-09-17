const express = require('express');
const app = express();



app.listen(3000, (err) => {
  if (err) throw new Error;
  console.log('listening on port', 3000);
})