import { Button, StyleSheet, Text, View } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { ORCHIDS } from "../data/dummy-data";
import { AppContext, FavoriteContext } from "../store/favorite-context";
import OrchidsList from "../component/OrchidsList/OrchidsList";

export default function FavoriteScreen({ navigation }) {
    const { ids, deleteListFavorites } = useContext(FavoriteContext)
    const favoriteOrchids = ORCHIDS.filter(orchid => ids.includes(orchid.id))

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <View style={styles.deleteOuterContainer}>
                    <View style={styles.deleteInnerContainer}>
                        <Button color='red' title="Delete All" onPress={deleteListFavorites} />
                    </View>
                </View>
            },

        })
    }, [navigation])

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
    },
    deleteOuterContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },

})