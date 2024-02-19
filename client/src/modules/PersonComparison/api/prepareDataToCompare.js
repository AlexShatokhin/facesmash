export default function prepareDataToCompare(persons, chosenPersonID){
    const comparisonResults = {
        persons: persons.map(person => person.id),
        chosenPerson: chosenPersonID
    }
    return comparisonResults;
}