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

// DELETE
router.delete("/post/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("DELETED!");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res
        .status(401)
        .json("You have to log in with your id if you want to delete");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL POSTS
router.get("/post", async (req, res) => {
  try {
    let posts;
    posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET POST
router.get("/post/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
