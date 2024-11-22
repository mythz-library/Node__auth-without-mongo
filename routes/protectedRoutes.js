const express = require("express");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");
const log = require("../utils/logger");
const router = express.Router();

router.get("/admin", authenticate, authorize(["admin"]), (req, res) => {
  log(`Admin accessed by user: ${req.user.email}`);
  res.status(200).json({ message: "Welcome Admin" });
});

router.get("/user", authenticate, (req, res) => {
  log(`User accessed by email: ${req.user.email}`);
  res.status(200).json({ message: `Hello User ${req.user.email}` });
});

module.exports = router;
