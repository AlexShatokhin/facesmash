const express = require("express");
const router = express.Router();
const multer = require("multer")

const addPerson = require("../controllers/addPerson");
const getPersons = require("../controllers/getPersons");
const editPersons = require("../controllers/editPersons");

const userRegistration = require("../controllers/registration");
const userAuthorization = require("../controllers/authorization");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, __dirname + '/../assets')
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		const fileExtension = file.mimetype.split("/").pop();
		cb(null, file.fieldname + '-' + uniqueSuffix + "." + fileExtension)
	}
})

const upload = multer({ storage: storage })


router.route("/persons")
		.post(upload.single("avatar"), addPerson.postPerson)

router.route("/persons/:sortType")
	.get(getPersons.getAllPersons)


router.route("/personsComparison")
	.get(getPersons.getPersonPair)
	.put(editPersons.changePersonsScore)

router.route("/registration")
	.post(userRegistration.registerUser)

router.route("/authorization")
	.get(userAuthorization.userAuthorization)

module.exports = router;