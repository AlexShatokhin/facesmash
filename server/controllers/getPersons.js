const db = require("../config/config");


class getPersons {
    async getAllPersons(req, res){
        const [persons] = await db.query("SELECT * FROM persons");
        res.send(persons)
    }
}

module.exports = new getPersons();