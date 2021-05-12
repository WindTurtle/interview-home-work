const router = require("express").Router();
let User = require("../models/users.model");

const bcrypt = require("bcrypt");
const e = require("express");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const userName = req.body.userName;
  const password = req.body.password;
  const name = req.body.name;
  const dob = req.body.dob;
  const newUser = new User({ id, userName, password, name, dob });

  newUser
    .save()
    .then(() => {
      res.json("User is added!");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/signup").post((req, res) => {
  let { id, userName, password, name, dob } = req.body;
  id = id.trim();
  userName = userName.trim();
  password = password.trim();
  name = name.trim();
  dob = dob.trim();
  if (id == "" || userName == "" || name == "" || password == "" || dob == "") {
    res.json({
      status: "FAILED",
      message: "Empty input field!",
    });
  } else if (!/^[a-zA-Z ]*$/.test(name)) {
    res.json({ status: "FAILED", message: "Invalid name entered" });
  } else if (!new Date(dob).getDate()) {
    res.json({ status: "FAILED", message: "Invalid date of birth entered" });
  } else if (password.length < 8) {
    res.json({ status: "FAILED", message: "Password is too short!" });
  } else {
    //check userName tồn tại
    User.find({ userName })
      .then((result) => {
        if (result.length) {
          // userName already exists
          res.json({
            status: "FAILED",
            message: "Username already exists",
          });
        } else {
          // passed
          const saltRound = 10;
          bcrypt
            .hash(password, saltRound)
            .then((hashedPassword) => {
              const newUser = new User({
                id,
                userName,
                name,
                password: hashedPassword,
                dob,
              });
              newUser
                .save()
                .then((result) => {
                  res.json({
                    status: "SUCCESS",
                    message: "Signup successfully",
                    data: result,
                  });
                })
                .catch((err) => {
                  err.json({
                    status: "FAILED",
                    message: "Signup failed",
                    data: result,
                  });
                });
            })
            .catch((err) => {
              err.json({
                status: "FAILED",
                message: "An error occured while hashing password",
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "FAILED",
          message: "An error occured while checking for existing user!",
        });
      });
  }
});

router.route("/signin").post((req, res) => {
  let { userName, password } = req.body;
  userName = userName.trim();
  password = password.trim();
  if (userName == "" || password == "") {
    res.status(401);
    res.json({
      status: "FAILED",
      message: "Empty credentials supplied!",
    });
  } else {
    User.find({ userName })
      .then((data) => {
        if (data.length) {
          // userName exists
          const hashedPassword = data[0].password;
          bcrypt
            .compare(password, hashedPassword)
            .then((result) => {
              if (result) {
                res.status(200);
                res.json({
                  status: "SUCCESS",
                  message: "Signin successful",
                  data: data,
                });
              } else {
                res.status(401);
                res.json({
                  status: "FAILED",
                  message: "Invalid username or password entered!",
                });
              }
            })
            .catch((err) => {
              res.status(400);
              err.json({
                status: "FAILED",
                message: "An error occured while comparing password",
              });
            });
        } else {
          res.status(401);
          res.json({
            status: "FAILED",
            message: "Invalid credentials entered!",
          });
        }
      })
      .catch((err) => {
        res.status(400);
        res.json({
          status: "FAILED",
          message: "An error occured while checking for existing user",
        });
      });
  }
});

module.exports = router;
