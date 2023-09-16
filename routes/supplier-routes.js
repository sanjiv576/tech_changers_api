const express = require("express");
const router = express.Router();

const supplierController = require("../controllers/supplier-controller");
const {
  verifyUser,
  verifySupplier,
} = require("../middlewares/authentication");

// Get all request made by users.
// /api/supplier/dashboard
router
  .route("/dashboard")
  .get(verifyUser, verifySupplier, supplierController.getRequests);

module.exports = router;
