const express = require("express");
const router = express.Router();

router.route("/persons")
    .get()
    .post()
    .put()

module.exports = router;