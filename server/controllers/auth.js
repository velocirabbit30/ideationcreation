const jwt = require('jsonwebtoken');
const fs = require('fs');
const db = require('../db/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const secret = require('/Users/Tanner/codesmith/projects/ideationCreation/ideationcreation/.env')

module.exports = {  

  signUp(req, res, next) {
    let { username, password } = req.body;
    bcrypt.hash(password, saltRounds, function(err, hash) {
      db.query(`INSERT INTO users (username, password) VALUES ($1, $2)`, [username, hash], (err, res) => {
        if (err) {
          next(err);
        }
        else {
          next();
        }
      })
    });
  },

  login(req, res, next) {
    let { username, password } = req.body;
    bcrypt.compare(password, hash).then(function(res) {
      db.query(`SELECT username, password FROM user WHERE username = ${username} AND password = ${password}`), (username, password), (err, res) => {
       if (err) throw err;
       else {
         next();
       }
  }})},

    // bcrypt compare request body and stored password, pass if it works
    // query the databse to see if login and password exists
    // if exists, then pass onto next

    // this ( code below ) return a token. This token contains everything we need to make a request to a protected route
    
  // },

  signCookie(req, res, next) {
    // assign the token to the cookie
    jwt.sign({user}, secret, (err, token) => {
      res.json({
        token
      });
    });
    // And to access a signed cookie use the signedCookies object of req: req.signedCookies['name']
  },


  // add boolean value is cookie is already signed
  isVerified(req, res, next) {
    // cookies used to be "headers"
    // res.redirect breaks out of middlewarechain  
    // already been auathenticated
    // this should go before lgoin and signup paths and redirect
    if (typeof req.cookies !== "undefined") {
      // splits on the space and gets token from array
      let token = req.cookies.authorization.split(" ")[1];
      let privateKey = fs.readFileSync('../../.env', 'utf8');
      jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, decoded) => {
        if (err) {
          res.status(500).json({ error: "Not Authorized "})
        }
        // verify middleware, 
        console.log(decoded);
        //res.redirect(redirect to the homepage)
        return next();
      })
    } else {
        res.status(500).json({ error: "Not Authorized"})
    }
  }
}
