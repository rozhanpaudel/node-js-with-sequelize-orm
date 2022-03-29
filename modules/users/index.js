const express = require("express");
const userRouter = express.Router();
const users = require("./methods");
var passport = require("passport");
var GoogleStrategy = require("passport-google-oidc");

userRouter.get("/list-all", users.getAllUsers);
userRouter.get("/create", users.create);

// userRouter.get("/login", passport.authenticate("google"));

module.exports = userRouter;
