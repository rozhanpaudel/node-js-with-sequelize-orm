const express = require("express");
const postRouter = express.Router();
const posts = require("./methods");

postRouter.get("/list-all", posts.getAllPosts);
postRouter.get("/create", posts.create);

module.exports = postRouter;
