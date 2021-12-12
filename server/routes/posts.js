const router = require("express").Router();
const Post = require("../models/Posts");

// CREATE
router.post("/create", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ALL POSTS
router.get("/read", async (req, res) => {
  try {
    let posts;
    posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
