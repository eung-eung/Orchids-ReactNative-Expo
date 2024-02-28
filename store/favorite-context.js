import { createContext, useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
export const FavoriteContext = createContext({
    ids: [],
    addFavorire: id => { },
    removeFavorite: id => { },
    getFavorites: () => { },
    isFavorite: id => { },
    deleteListFavorites: () => { }
})

export default function FavoriteContextProvider({ children }) {
    const [favoriteOrchidIds, setFavoriteOrchidIds] = useState([])
    const FAVORITES_KEY = '@MyFavorites';

    useEffect(() => {
        getFavorites()
    }, [])

    async function deleteListFavorites() {
        console.log('before delete: ', getFavorites);
        await AsyncStorage.removeItem(FAVORITES_KEY)
        setFavoriteOrchidIds([])
        console.log('after delete: ', getFavorites);

    }

    async function getFavorites() {
        try {
            const storedValue = await AsyncStorage.getItem(FAVORITES_KEY);
            if (storedValue) {
                setFavoriteOrchidIds(JSON.parse(storedValue));
                return JSON.parse(storedValue)
            }
            return []; // or {} depending on your data structure
        } catch (error) {
            console.error('Error getting favorites:', error);
            return []; // or {} depending on your data structure
        }
    }

    async function addFavorire(id) {
        try {
            const favorites = await getFavorites();
            console.log('id before add: ', id);
            console.log('Before add: ', favorites);
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites, id]));
            setFavoriteOrchidIds(prevIds => [...prevIds, id])
        } catch (error) {
            console.error('Error adding to favorites:', error);
        }
    }
    async function removeFavorite(itemId) {
        try {
            const favorites = await getFavorites();
            const updatedFavorites = favorites.filter((item) => item !== itemId); // adjust filter based on item structure
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
            setFavoriteOrchidIds(updatedFavorites)
        } catch (error) {
            console.error('Error removing from favorites:', error);
        }
    }
    async function isFavorite(itemId) {
        try {
            const favorites = await getFavorites();
            console.log('is favorite list: ', favorites);
            console.log('item id: ', itemId);
            console.log(favorites.includes((id) => id === itemId));
            return favorites.includes((id) => id === itemId); // adjust based on item structure
        } catch (error) {
            console.error('Error checking favorites:', error);
            return false;
        }
    }

    const value = {
        ids: favoriteOrchidIds,
        addFavorire,
        removeFavorite,
        isFavorite,
        getFavorites,
        deleteListFavorites
    }
    return <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>
}