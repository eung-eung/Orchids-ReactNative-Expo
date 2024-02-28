import { FlatList, StyleSheet, View } from "react-native"
import { useEffect, useRef } from 'react'
import OrchidItem from "./OrchidItem"

export default function OrchidsList({ items, isScrollToTop }) {
    const flatList = useRef()

    if (isScrollToTop) {
        flatList.current.scrollToOffset({ animated: false, offset: 0 })
    }


    const renderOrchidItem = itemData => {
        const item = itemData.item
        const orchidItemProps = {
            id: item.id,
            name: item.name,
            image: item.image,
            description: item.description,
            categoryId: item.categoryId
        }
        return <OrchidItem {...orchidItemProps} />
    }
    return (
        <View style={styles.container}>
            <FlatList
                ref={flatList}
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderOrchidItem}
                scrollIndicatorInsets={{ right: 1 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,

    }
})
