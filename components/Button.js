import { Pressable, View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
    if (theme === 'primary'){
        //TODO: Implementar botão com fundo branco e borda amarela
        return (
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18}]}>
                <Pressable 
                    style={[styles.button, {backgroundColor: '#fff'}]}
                    onPress={onPress}
                >
                    <FontAwesome 
                        name = 'picture-o' size = {18} style={styles.iconButton}
                    />
                    <Text style={[styles.buttonLabel, {color: '#25292e'}]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    iconButton: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    }
})