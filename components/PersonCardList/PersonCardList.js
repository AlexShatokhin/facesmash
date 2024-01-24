import {PersonCardFlatList} from "./PersonCardList.styles"

const PersonCardList = ({data, renderItem}) => {
    console.log(data.map(renderItem).length)
    return (
        <PersonCardFlatList
            horizontal = {false}
            data={data}
            renderItem={({item}) => renderItem(item)} 
            numColumns={2}/>
    )
}

export default PersonCardList