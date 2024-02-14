const express = require("express");
const router = express.Router();
const multer = require("multer")

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

const addPerson = require("../controllers/addPerson");
const getPersons = require("../controllers/getPersons")

router.route("/persons")
		.get(getPersons.getAllPersons)
		.post(upload.single("avatar"), addPerson.postPerson)
		.put()

router.route("/personsComparison")
	.get(getPersons.getPersonPair)

module.exports = router;