import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({icon, label, onPress}) {
    return (
        <Pressable styles ={StyleSheet.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color='#fff' />
            <Text style ={styles.iconsButtonLabel}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconsButtonLabel: {
        color: '#fff',
        marginTop: 12,
    }
});
