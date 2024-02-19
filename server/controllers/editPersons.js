const db = require("../config/config");


class EditPersons {
    async changePersonsScore(req, res){
        const {persons, chosenPerson} = req.body;
        const losePerson = persons.filter(person => person !== chosenPerson)[0];
        await db.query(`UPDATE persons SET rating = rating + 10 WHERE id = ${chosenPerson}`);
        await db.query(`UPDATE persons SET rating = rating - 10 WHERE id = ${losePerson}`)

        res.send({
            ok: true
        })

    }
}

module.exports = new EditPersons();