const express = require("express");
const userRouter = express.Router();
const users = require("./methods");
var passport = require("passport");
var GoogleStrategy = require("passport-google-oidc");

userRouter.get("/", users.getAllUsers);
userRouter.post("/", users.create);
userRouter.put("/:id", users.modify);
userRouter.delete("/:id", users.removeUser);

// userRouter.get("/login", passport.authenticate("google"));

module.exports = userRouter;
