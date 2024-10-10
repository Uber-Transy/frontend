import React from 'react'
import {View, StyleSheet, Text, StatusBar, TouchableOpacity, Image} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import {useRouter} from "expo-router";
import Onboarding from "@/components/Onboarding";

const Page = () => {
    const router = useRouter()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            <Onboarding/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    skip: {
        justifyContent:'center',
        alignItems: 'flex-end',
        paddingRight: 20,
        paddingTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: Colors.gray
    },
    box:{
        alignItems:'center',
        justifyContent:'center',
        marginTop: 50,
    },
    image: {
        width: '90%',
    },
    title: {
        fontSize: 30,
        color: Colors.gray,
        marginBottom: 5,
        marginTop: 30
    },
    subText: {
        fontSize: 16,
        color: Colors.gray,
        textAlign:'center',
        paddingHorizontal: 50,
    },
    border:{
        justifyContent:'flex-end',
        alignItems:'center',
        flex: 1,
        paddingBottom: 100,
    },
    circleBorder: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor:Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    primarySegment: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor:Colors.alternative,
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: [{ rotate: '45deg'}]
    },
    circle: {
        backgroundColor: Colors.primary,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Page