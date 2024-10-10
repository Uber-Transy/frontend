import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
    block: {
        backgroundColor: Colors.background,
        borderRadius: 10,
        marginHorizontal: 14,
        marginTop: 20,
        padding: 30,
        alignItems:'center'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 10,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.black,
        marginLeft: 50,
    },
    h1:{
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.gray,
        padding: 10
    },
    h2:{
        fontSize: 24,
        fontWeight: '700',
        color: Colors.gray
    },
    p:{
        fontSize: 20,
        fontWeight: '300',
        color: Colors.gray
    },
    button:{
        padding: 15,
        backgroundColor: Colors.primary,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 25
    },
    buttonText:{
        fontSize: 18,
        fontWeight: '800',
        color: Colors.white
    },
    back: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
        alignSelf:'flex-start'
    },
    backText:{
        fontSize: 18,
        fontWeight: '100',
        marginLeft: 5
    },
    email: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.lightGray,
        padding: 15,
        width: '90%',
        color: Colors.gray
    },
});