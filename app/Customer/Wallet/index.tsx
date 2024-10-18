import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import HamburgerMenu from "@/components/HamburgerMenu";
import NotificationBell from "@/components/NotificationBell";

const Page = () => {
    return (
        <View style={styles.container}>
            <HamburgerMenu/>
            <NotificationBell/>
            <Text>Page</Text>
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