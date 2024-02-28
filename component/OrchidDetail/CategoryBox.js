import { View, StyleSheet, Text } from 'react-native'

export default function CategoryBox({ children }) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.category}>{children}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    category: {
        color: '#ffffff',
    },
    innerContainer: {
        backgroundColor: 'black',
        borderWidth: 1,
        padding: 5,
        borderRadius: 4,
        marginVertical: 4,
        // marginHorizontal: 12,
    }
})