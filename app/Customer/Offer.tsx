import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import HamburgerMenu from "@/components/HamburgerMenu";

const Page = () => {
    return (
        <View style={styles.container}>
            <HamburgerMenu/>
            <Text>Offer</Text>
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