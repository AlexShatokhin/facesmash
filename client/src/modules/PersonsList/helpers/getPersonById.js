export default function getPersonById(id, persons = []){
    return persons.filter(person => +person.id === +id)[0];
}