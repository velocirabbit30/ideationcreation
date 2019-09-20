const jwt = require('jsonwebtoken');
const fs = require('fs');
const db = require('../db/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config();

module.exports = {  

  signUp(req, res, next) {
    let { username, password } = req.body;
    bcrypt.hash(password, saltRounds, function(err, hash) {
      db.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, hash], (err, result) => {
        if (err) {
          console.log(`The error is ${err}`)
          return res.status(400).json({error: 'there was an error when signing up'})
        }
        else {
          console.log('going next in signup middleware');
          return next();
        }
      })
    });
  },

  login(req, res, next) {
    let { username, password } = req.body;
    console.log(typeof username);
    console.log(typeof password);
    const args = [username];
    console.log(args);
    db.query("SELECT password FROM users WHERE username = $1", args, (err, result) => {
      if (err) {
        console.error('there was an error querying the user table', err);
        return res.status(500).json({errorMessage: "Login was unsucessful", err: err});
        }
        console.log(result.rows);
        if (result.rows.length > 0) {
          bcrypt.compare(password, result.rows[0].password).then(function(response) {
            if (response) {
              console.log('login: moving onto next')
              return next();
            }
            else {
              console.log('password doesnt match');
              return res.status(400).json({error: 'that password does not match the one on file'});
            }
          })
        }
        else {
          res.status(400).json({error: 'that user does not match someone on file'});
        }
      
  })
},

    // bcrypt compare request body and stored password, pass if it works
    // query the databse to see if login and password exists
    // if exists, then pass onto next

    // this ( code below ) return a token. This token contains everything we need to make a request to a protected route
    
  // },

  signCookie(req, res, next) {
    // assign the token to the cookie
    console.log('entered into signCookie');
    console.table(req.body);
    console.log('private key: ', process.env.RSA_PRIVATE_KEY);
    res.cookie.test = 'test';
    jwt.sign(req.body.username + req.body.password, process.env.RSA_PRIVATE_KEY, (err, token) => {
      if (err) return res.status(500).json({err: 'there was an error signing the jwt'});
      console.log("The token is: " + token);
      res.cookie('authorization', token);
      // console.log(res.cookie);
      return next();
    });
 // And to access a signed cookie use the signedCookies object of req: req.signedCookies['name']
  },


  // add boolean value is cookie is already signed
  isVerified(req, res, next) {
    // cookies used to be "headers"
    // res.redirect breaks out of middlewarechain  
    // already been auathenticated
    // this should go before lgoin and signup paths and redirect
    console.log(req.cookies);
    console.table(req.body);
    if (req.cookies.authorization) {
      // splits on the space and gets token from array
      console.log('req.cookies has authorization field');
      let token = req.cookies.authorization;
      // .split(" ")[1];
      let privateKey = process.env.RSA_PRIVATE_KEY;
      jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, decoded) => {
        if (err) {
          res.status(500).json({ error: "Not Authorized "})
        }
        // verify middleware, 
        console.log(decoded);
        //res.redirect(redirect to the homepage)
        return res.status(200).json({isAuthenticated: true});
      })
    }
    console.log('isVerified: moving onto next piece of middleware')
    return next();
  }
}
