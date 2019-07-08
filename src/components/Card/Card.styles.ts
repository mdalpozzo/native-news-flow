import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        // ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        // android
        elevation: 10,
        overflow: 'hidden',
    },
});

export default styles;