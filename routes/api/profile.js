const express = require("express");
const router = express.Router();

// @ROUTE GET api/profile
// @DESCRIPTION test route for profile
// @ACCESS Public
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
