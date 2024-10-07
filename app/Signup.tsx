import React from 'react'
import {View, Text, StyleSheet} from "react-native";

const Page = () =>{
    return(
        <View style={styles.container}>
            <Text>Signup page</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Page