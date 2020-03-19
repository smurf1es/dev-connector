const express = require("express");
const router = express.Router();

// @ROUTE GET api/auth
// @DESCRIPTION test route for users
// @ACCESS Public
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;
