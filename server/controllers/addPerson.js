const db = require("../config/config");

class addPerson {
    async postPerson (req, res){
        try{
            const {name, surname, image} = req.body;
            await db.query(`
                INSERT INTO persons(name, surname, imageURL)
                VALUES('${name}', '${surname}', '${image}');
            `)
            res.send({
                status: 200
            })
        } catch (e){
            console.log(e);
            res.send({
                status: 400
            })
        }

    }
}

module.exports = new addPerson();