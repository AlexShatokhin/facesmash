const db = require("../config/config");


class EditPersons {
    async changePersonsScore(req, res){
        const {persons, choosenPerson} = req.body;
        const losePerson = persons.filter(person => person !== choosenPerson)[0];
        await db.query(`UPDATE persons SET rating = rating + 10 WHERE id = ${choosenPerson}`);
        await db.query(`UPDATE persons SET rating = rating - 10 WHERE id = ${losePerson}`)

        res.send({
            ok: true
        })

    }
}

module.exports = new EditPersons();