import { Text, View, StyleSheet } from "react-native";

export default function List({ data }) {
    return (data.map(item => (
        <View style={styles.listItem} key={item}>
            <Text style={styles.itemText}>
                {item}
            </Text>
        </View>
    ))
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#f5d2bc'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})