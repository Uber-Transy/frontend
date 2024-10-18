import React from 'react'
import {View, Text, StyleSheet} from "react-native";

const Page = () => {
    return (
        <View style={styles.container}>
            <Text>Hello driver!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Page