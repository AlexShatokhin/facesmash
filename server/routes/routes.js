const express = require("express");
const router = express.Router();
const addPerson = require("../controllers/addPerson");
const getPersons = require("../controllers/getPersons")

router.route("/persons")
    .get(getPersons.getAllPersons)
    .post(addPerson.postPerson)
    .put()

module.exports = router;