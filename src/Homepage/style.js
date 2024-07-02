import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',  
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#6b9080',
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 120,
        paddingTop: 160,
        flex:0,
    },
    button: {
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#FFC0CB',
        width: 150
    },
    text: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000000',
      },
      header: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 22
      },
})

export default styles