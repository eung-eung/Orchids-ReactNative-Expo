import { FlatList, StyleSheet, View } from "react-native"

import OrchidItem from "./OrchidItem"

export default function OrchidsList({ items }) {
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
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderOrchidItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})
