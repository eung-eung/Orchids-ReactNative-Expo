import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
export default function IconButton({ icon, color, onPress, size }) {
    return <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
    >
        <AntDesign name={icon} size={size} color={color} />
    </Pressable>
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
        transform: [{ scale: 1.2 }],

    }
})