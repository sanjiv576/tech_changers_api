const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//For /api/user/signup
const signUpUser = (req, res, next) => {
  const { contactNumber, password, address, fullName, userPhoto } = req.body;

  User.findOne({ contactNumber: req.body.contactNumber })
    .then((user) => {
      if (user)
        return res
          .status(400)
          .json({ error: "Contact number is already registered!" });
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(400).json({ error: err.message });
        User.create({
          contactNumber,
          password: hash,
          address,
          fullName,
          role: "user",
          userPhoto,
        })
          .then((user) => {
            res.status(201).json(user);
          })
          .catch(next);
      });
    })
    .catch(next);
};

//For /api/user/signin
const signInUser = (req, res, next) => {
  User.findOne({ contactNumber: req.body.contactNumber })
    .then((user) => {
      if (!user) return res.status(404).json({ error: "User not found!" });
      bcrypt.compare(req.body.password, user.password, (err, success) => {
        if (err) return res.status(400).json({ error: err.message });
        if (!success)
          return res.status(400).json({ error: "Incorrect password!" });
        const payload = {
          id: user.id,
          contactNumber: user.contactNumber,
          role: user.role,
        };
        jwt.sign(
          payload,
          process.env.SECRET,
          { expiresIn: "30d" },
          (err, token) => {
            if (err)
              return res.status(500).json({ error: "Error with payload!" });
            res.json({ status: "Logged In", token: token, user: user });
          }
        );
      });
    })
    .catch(next);
};

//For /api/user/info
const getInfo = (req, res, next) => {
  User.findById(req.user.id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "User not found!" });
      }
      res.json({ data: user });
    })
    .catch(next);
};

//For /api/user/requestWater
const requestWater = (req, res, next) => {

    console.log(req.user)

  User.findById(req.user.id)
    .then((user) => {
      if (!user) return res.status(404).json({ error: "User not found." });
      const request = {
        user: req.user.id,
        price: req.body.price,
        contactNumber: req.user.contactNumber
      };
      user.waterRequest.push(request);
      user
        .save()
        .then((user) =>
          res.status(201).json(user.waterRequest[user.waterRequest.length - 1])
        )
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  signUpUser,
  signInUser,
  getInfo,
  requestWater,
};
