import React, { useEffect, useState } from 'react'
import { ORCHIDS } from '../data/dummy-data'
import OrchidsList from '../component/OrchidsList/OrchidsList'
import { View, StyleSheet, Platform } from 'react-native'
import PickerCategories from '../component/Picker'


export default function AllOrchidsScreen() {
    const [selectedValue, setSelectedValue] = useState('c1');
    const [isScrollToTop, setIsScrollToTop] = useState(false)
    const list = selectedValue === 'c0' ? ORCHIDS : ORCHIDS.filter(orchid => orchid.categoryId === selectedValue)

    useEffect(() => {
        console.log('render');
        setIsScrollToTop(true)
    }, [selectedValue])

    return (
        <>
            <View style={styles.container}>

                <PickerCategories selectedValue={selectedValue} setSelectedValue={setSelectedValue} />

                <View style={styles.listContainer}>
                    <OrchidsList items={list} isScrollToTop={isScrollToTop} />
                </View>
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: 0
    },
    container: {
        flex: 1,

    },
    picker: {
        alignItems: 'flex-end',
        flexDirection: 'column'
    }
})