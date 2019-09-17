const express = require('express');
const jwt = require('jsonwebtoken')
const fs = require('fs');
const app = express();

app.get('/', (req, res) => res.send("Hello World"))

app.get('/secret', (req, res) => {
  res.json({"message": "Super Secret"})
})

app.get("/readme", (req, res) => {
  res.json({"message": "Hello World"})
})

app.get('/jwt', (req, res) => {
  let privateKey = fs.readFileSync('../private.pem', 'utf8');
  let token = jwt.sign({"Body": "stuff"}, privateKey, { algorithm: 'HS256'} );
  res.send(token);
})

function isAuthenticated(req, res, next) {
  if (typeof req.headers.authorization !== "undefined") {
    let token = req.headers.authorization.split(" ")[1];
    let privateKey = fs.readFileSync('../private.pem', 'utf8');

    jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, decoded) => {
      if (err) {
        res.status(500).json({ error: "Not Authorized "})
      }

      console.log(decoded);

      return next();

    })
  }
}

app.listen(3000, (err) => {
  if (err) throw new Error;
  console.log('listening on port', 3000);
})