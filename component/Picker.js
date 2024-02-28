import { View, StyleSheet, FlatList, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker"
import { CATEGORIES } from "../data/dummy-data";
import { SelectList } from 'react-native-dropdown-select-list';

export default function PickerCategories({ selectedValue, setSelectedValue }) {
    const data = CATEGORIES.map(c => ({ key: c.id, 'value': c.title }))

    const renderCategories = ({ item }) => (

        <View View style={styles.itemContainer} >
            <View style={styles.textContainer}>
                <Text >
                    {'zo'}
                    {item.title}
                    {'\n'}
                </Text>

            </View>
        </View >
    );

    return (
        <View style={styles.container}>
            <SelectList
                setSelected={setSelectedValue}
                style={styles.picker}
                data={[{ key: 'c0', value: 'All' }, ...data]}
                dropdownTextStyles={{ color: 'white' }}
                inputStyles={{ color: 'white' }}
                search={false}
            >
                {/* <Picker.Item key='c0' label='All' value='c0' /> */}
            </SelectList>
        </View>


    )
}
const styles = StyleSheet.create({

    container: {
        padding: 8,
        // backgroundColor: ''
        color: 'white'
    },
    itemContainer: {
        width: '50%',
        borderWidth: 1,
        alignItems: 'center',
        padding: 4,
        margin: 4,
        flexWrap: 'wrap',
    },
    textContainer: {
        margin: 4,
        flexWrap: 'wrap',
    },
    text: {
        color: 'white'
    }
});
