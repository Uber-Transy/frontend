import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Colors from "@/constants/Colors";
import NavOptions from "@/components/NavOptions";


const Page = () => {
    return (
        <View style={styles.container}>
            <NavOptions/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        padding: 60,
        backgroundColor: Colors.background,
    }
})

export default Page