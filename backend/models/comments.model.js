const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
    },
    post: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
