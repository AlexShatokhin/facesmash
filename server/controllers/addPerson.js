const db = require("../config/config");

class addPerson {
    async postPerson (req, res){
        try{
            console.log(req.file);
            const {name, surname} = req.body;
            await db.query(`
                INSERT INTO persons(name, surname, imageURL)
                VALUES('${name}', '${surname}', '${req.file.filename}');
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