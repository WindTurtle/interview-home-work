const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connect to database successfully");
});

const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments");

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
