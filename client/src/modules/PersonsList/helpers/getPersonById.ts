import { personCardType } from "@/src/types/personCardType";

export default function getPersonById(id : number, persons: personCardType[] = []){
    return persons.filter(person => +person.id === +id)[0];
}