import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";
import OrchidDetails from "../OrchidDetails";
import { useContext } from "react";
import { AppContext, FavoriteContext } from "../../store/favorite-context";
import IconButton from "../IconButton"
import Subtitle from "../OrchidDetail/Subtitle";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryBox from "../OrchidDetail/CategoryBox";

export default function OrchidItem({ id, name, image, description, categoryId }) {

    const navigation = useNavigation()
    const favoriteOrchidsCtx = useContext(FavoriteContext)
    const category = CATEGORIES.find(cate => cate.id === categoryId)

    // const { data, saveData } = useContext(AppContext)
    const selectOrchidItemHandler = () => {
        navigation.navigate('OrchidDetails', {
            orchidId: id
        })
    }


    const orchidIsFavorite = favoriteOrchidsCtx.ids ? favoriteOrchidsCtx.ids.includes(id) : false

    const changeFavoriteStatusHandler = (orchidId) => {
        if (orchidIsFavorite) {
            favoriteOrchidsCtx.removeFavorite(orchidId)
        } else {
            favoriteOrchidsCtx.addFavorire(orchidId)
        }

    }
    return (
        <View style={styles.orchidItem}>

            <Pressable
                onPress={selectOrchidItemHandler}
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: image }} style={styles.image} />
                        <Text style={styles.title}>{name}</Text>
                    </View>
                    <OrchidDetails
                        title={description}
                    />


                </View>
            </Pressable>
            <View style={styles.bottomContainer}>
                <CategoryBox>{category.title}</CategoryBox>
                <Pressable style={styles.heartContainer}  >
                    <IconButton
                        icon={orchidIsFavorite ? 'heart' : 'hearto'}
                        color={orchidIsFavorite ? '#FF3040' : 'black'}
                        size={34}
                        onPress={() => changeFavoriteStatusHandler(id)} />
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',

    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    buttonPressed: {
        opacity: 0.5
    },
    orchidItem: {
        margin: 36,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4,
        // box shadow IOS
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    image: {
        width: "100%",
        height: 200,
        objectFit: 'cover'
    },
    title: {
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
        padding: 8
    },
    heartContainer: {
        backgroundColor: 'none',
        alignItems: 'flex-end',

    }
})
