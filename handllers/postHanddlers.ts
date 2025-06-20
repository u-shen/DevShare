import crypto from "crypto";
import { db } from "../datastore/database.ts";

export const getAllPosts = (req, res) => {
  const posts = db.getPosts();
  res.render("index", {
    posts: posts?.reverse(),
  });
};

export const create = (req, res) => {
  res.render("createPost");
};

export const createPost = (req, res) => {
  const post = {
    id: crypto.randomUUID(),
    title: req.body.title,
    url: req.body.url,
    postedAt: Date.now(),
  };
  db.createPost(post);
  res.redirect("/");
};
