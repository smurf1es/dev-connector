const express = require("express");
const router = express.Router();

// @ROUTE GET api/users
// @DESCRIPTION test route for users
// @ACCESS Public
router.get("/", (req, res) => res.send("User route"));

module.exports = router;
