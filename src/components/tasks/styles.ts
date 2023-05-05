import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        marginBottom: 10,
        height: 64,
    },

    name: {
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#f2f2f2',
        borderRadius: 8,
        margin: 20,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'underline',
    },

    checkBox: {

    },

    wrapperCustom: {
        borderRadius: 8,
        padding: 4,
    },

})