const express = require("express");
const router = express.Router();
const addPerson = require("../controllers/addPerson");

router.route("/persons")
    .get((req, res) => res.send({ok: 200}))
    .post(addPerson.postPerson)
    .put()

module.exports = router;