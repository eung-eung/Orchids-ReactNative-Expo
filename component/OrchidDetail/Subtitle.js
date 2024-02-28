import { Text, View, StyleSheet } from "react-native";

export default function Subtitle({ children }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    subTitle: {
        color: '#f5d2bc',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    subTitleContainer: {
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6,
        borderBottomColor: "#f5d2bc",
        borderBottomWidth: 2
    }
})