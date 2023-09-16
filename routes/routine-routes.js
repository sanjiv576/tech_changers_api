const express = require("express");
const router = express.Router();

const routineController = require("../controllers/routine-controller");

// Get water provision routine.
router.route("/").get(routineController.getRoutine);

module.exports = router;