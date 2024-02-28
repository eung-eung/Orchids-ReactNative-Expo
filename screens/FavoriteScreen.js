import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { ORCHIDS } from "../data/dummy-data";
import { AppContext, FavoriteContext } from "../store/favorite-context";
import OrchidsList from "../component/OrchidsList/OrchidsList";

export default function FavoriteScreen() {
    const { ids } = useContext(FavoriteContext)
    const favoriteOrchids = ORCHIDS.filter(orchid => ids.includes(orchid.id))
    console.log('ids: ', ids);

    if (ids.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite orchid yet.</Text>
        </View>
    }
    return (
        <OrchidsList items={favoriteOrchids} />
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 19,
        fontWeight: "bold",
        color: 'white'
    }
})