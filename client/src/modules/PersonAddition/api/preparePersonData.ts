import { addPersonCardDataType, addPersonCardImageType } from "@/src/types/addPersonCardType";

export default function prepareDataToFetch(person : addPersonCardDataType, image : addPersonCardImageType){
    const fetchData = new FormData();
    fetchData.append("name", person.name);
    fetchData.append("surname", person.surname);
    fetchData.append("avatar", JSON.stringify({
        uri: image.uri,
        type: image.type,
        name: "new image"
    }));
    fetchData.append("personImageHeader", 'data:image/jpeg;base64,');

    return fetchData
}