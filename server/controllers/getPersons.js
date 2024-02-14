const db = require("../config/config");
const fs = require("fs")

function getImage(imageURL){
    const fullPath =  __dirname + '/../assets/' + imageURL;
    const extension = imageURL.split(".").pop();
    const img = fs.readFileSync(fullPath);
    const base64Image = Buffer.from(img).toString('base64');

    return `data:image/${extension};base64, ${base64Image}`;
}

function getRandomIndexes(array, indexesCount = 1, result = []){
    result = [...result, Math.floor(Math.random() * array.length)];
    const resultSetType = new Set(result);
    return resultSetType.size === indexesCount ? result : getRandomIndexes(array, indexesCount, Array.from(resultSetType))
}

class getPersons {

    async getAllPersons(req, res){
        let [persons] = await db.query("SELECT * FROM persons");
        persons = persons.map(person => ({...person, imageURL: getImage(person.imageURL)}))
        console.log(persons)
        res.send(persons)
    }

    async getPersonPair(req, res){
        let [idSet] = await db.query(`SELECT id FROM persons`);
        idSet = idSet.map(idObject => idObject.id);
        
        const personsId = getRandomIndexes(idSet, 2);

        let [persons] = await db.query(`SELECT * FROM persons WHERE id = ${idSet[personsId[0]]} OR id = ${idSet[personsId[1]]}`);
        persons = persons.map(person => ({...person, imageURL: getImage(person.imageURL)}))
        res.send(persons)
    }
}

module.exports = new getPersons();