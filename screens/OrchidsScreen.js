import { View, Text } from "react-native";
import { CATEGORIES, ORCHIDS } from '../data/dummy-data'
import { useLayoutEffect } from "react";
import OrchidsList from "../component/OrchidsList/OrchidsList";
export default function OrchidsScreen({ route, navigation }) {
    const categoryId = route.params.categoryId
    const displayedOrchids = ORCHIDS.filter(orchid => orchid.categoryId === categoryId)


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title
        // set title 
        navigation.setOptions({
            title: categoryTitle
        })

    }, [categoryId, navigation])

    return (
        <OrchidsList items={displayedOrchids} />
    )
}
