import React, { useContext } from 'react'
import { FlatList, Text, View } from 'react-native'
import CategoryGridTile from '../component/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import { AppContext } from '../store/favorite-context'
export default function CategoriesScreen({ navigation }) {

    const renderCategoryItem = itemData => {
        const pressHandler = () => {
            navigation.navigate('Orchids', {
                categoryId: itemData.item.id
            })
        }
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}
