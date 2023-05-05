import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#454545',
        justifyContent: 'center',
        padding: 30,
    },

    to: {
        position: 'absolute',
        width: 110.34,
        height: 32,
        margin: 10,
        marginLeft: 120,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#4EA8DE'

    },

    do: {
        position: 'relative',
        width: 110.34,
        height: 32,
        margin: 10,
        marginLeft: 150,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#5E60CE'
    },

    form: {
        marginTop: 5,
        marginBottom: 36,
        width: '100%',
        flexDirection: 'row',
    },

    status: {
        position: 'relative',
        width: '100%',
        fontSize: 90,
        fontWeight: 'bold',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 30,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

    input: {
        flex: 1,
        height: 52,
        flexDirection: 'row',
        backgroundColor: '#262626',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        color: '#ffff',
        padding: 16,
        fontSize: 16,
        marginRight: 10,
    },

    button: {
        width: 52,
        height: 52,
        order: 0,
        flexGrow: 0,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },

    buttonText: {
        color: 'white',
        fontSize: 24,
    },

    listEmptyText: {
        color: '#808080',
        fontSize: 12,
        textAlign: 'center',
    },

    separator: {
        marginVertical: 8,
        marginTop: -10,
        marginBottom: 50,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});