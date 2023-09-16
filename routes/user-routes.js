const express = require("express");
const router = express.Router();
const { verifyUser } = require('../middlewares/authentication')
const userController = require("../controllers/user-controller");

//Add new user.
router.route("/signup").post(userController.signUpUser);

//User login.
router.route("/signin").post(userController.signInUser);

//Get information of specific user.
router.route("/info").get(verifyUser,userController.getInfo);

//Request water.
router.route("/requestwater").post(verifyUser,userController.requestWater);

module.exports = router;
