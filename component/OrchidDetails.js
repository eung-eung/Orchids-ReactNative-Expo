import { StyleSheet, Text, View } from "react-native";


export default function OrchidDetails({ title, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: 'center',
        marginBottom: 20

    },
    detailItem: {
        marginHorizontal: 2,
        fontSize: 12
    }
})
