import { FC } from "react"
import { personCardType } from "@/src/types/personCardType"
import { ListRenderItemInfo, FlatList } from "react-native"

import { styles } from "./PersonCardList.styles"

type PersonCardListProps = {
    data: personCardType[],
    renderItem: (item: personCardType) => JSX.Element
}

const PersonCardList : FC<PersonCardListProps> = ({data, renderItem}) => {
    return (
        <FlatList<personCardType>
            style = {styles.flatList}
            contentContainerStyle = {{
                alignItems: "center"
            }}
            horizontal = {false}
            data={data}
            renderItem={({item} : ListRenderItemInfo<personCardType>) => renderItem(item)} 
            numColumns={2}/>
    )
}

export default PersonCardList