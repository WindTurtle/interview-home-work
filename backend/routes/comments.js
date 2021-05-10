const router = require("express").Router();
let Comment = require("../models/comments.model");

router.route("/").get((req, res) => {
  Comment.find()
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const owner = req.body.owner;
  const post = req.body.post;
  const content = req.body.content;
  const newComment = new Comment({ id, owner, post, content });

  newComment
    .save()
    .then(() => {
      res.json("Comment is added!");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
