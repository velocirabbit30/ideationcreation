const jwt = require('jsonwebtoken')
const fs = require('fs');
const express = require('express');
const authControllers = require('../controllers/auth');
const authRouter = express.Router();

// test if valid login
// research how to invoke cookie with supertest

authRouter.post('/login', authControllers.isVerified, authControllers.login, authControllers.signCookie, (req, res) => {
  return res.status(200).json({isAuthenticated: true});
})

authRouter.post('/register', authControllers.isVerified, authControllers.signUp, authControllers.signCookie, (req, res) => {
  return res.status(200).json({isAuthenticated: true});
});

module.exports = authRouter;