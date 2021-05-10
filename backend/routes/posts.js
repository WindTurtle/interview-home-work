const router = require("express").Router();
let Post = require("../models/posts.model");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const owner = req.body.posts;
  const title = req.body.title;
  const content = req.body.content;
  const newPost = new Post({ id, owner, title, content });

  newPost
    .save()
    .then(() => {
      res.json("Post is added!");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
