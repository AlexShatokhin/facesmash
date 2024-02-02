import {PersonCardFlatList} from "./PersonCardList.styles"

const PersonCardList = ({data, renderItem}) => {
    return (
        <PersonCardFlatList
            contentContainerStyle = {{
                alignItems: "center"
            }}
            horizontal = {false}
            data={data}
            renderItem={({item}) => renderItem(item)} 
            numColumns={2}/>
    )
}

export default PersonCardList