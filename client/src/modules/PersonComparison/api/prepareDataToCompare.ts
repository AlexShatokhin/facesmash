import { personCardType } from "@/src/types/personCardType";

export default function prepareDataToCompare(persons : personCardType[], chosenPersonID : number){
    const comparisonResults = {
        persons: persons.map(person => person.id),
        chosenPerson: chosenPersonID
    }
    return comparisonResults;
}