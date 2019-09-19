const jwt = require('jsonwebtoken')
const fs = require('fs');
const express = require('express');
const authControllers = require('../controllers/auth');
const authRouter = express.Router();

// test if valid login
// research how to invoke cookie with supertest

authRouter.post('/login', authControllers.isVerified, authControllers.login, authControllers.signCookie, (req, res) => {
  res.status(200).send('Logged in')
})

authRouter.post('/register', authControllers.signUp, authControllers.signCookie, (req, res) => {
  res.status(200).send('Successfully registered')
});

module.exports = authRouter;