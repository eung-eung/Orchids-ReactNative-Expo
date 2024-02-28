import { Image, Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ORCHIDS } from "../data/dummy-data"
import { FavoriteContext } from "../store/favorite-context";
import IconButton from "../component/IconButton";
import OrchidDetails from "../component/OrchidDetails";
import Subtitle from "../component/OrchidDetail/Subtitle";
export default function OrchidDetailsScreen({ route, navigation }) {
    const { ids, getFavorites, removeFavorite, addFavorire, isFavorite } = useContext(FavoriteContext)
    const orchidId = route.params.orchidId
    const orchid = ORCHIDS.find(orchid => orchid.id === orchidId)
    const orchidIsFavorite = ids ? ids.includes(orchidId) : false

    const changeFavoriteStatusHandler = () => {
        if (orchidIsFavorite) {
            removeFavorite(orchidId)
        } else {
            addFavorire(orchidId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={orchidIsFavorite ? 'heart' : 'hearto'}
                    color={orchidIsFavorite ? '#FF3040' : 'white'}
                    size={24}
                    onPress={changeFavoriteStatusHandler} />
            },
            title: orchid.name
        })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: orchid.image }} />
            <Text style={styles.title}>{orchid.title}</Text>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Name</Subtitle>
                    <OrchidDetails
                        textStyle={styles.detailText}
                        title={orchid.name}
                    />
                    <Subtitle>Description</Subtitle>
                    <OrchidDetails
                        textStyle={styles.detailText}
                        title={orchid.description}
                    />


                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "#fff",
        fontSize: 20,
        flexWrap: 'wrap'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        maxWidth: '80%'
    }
})