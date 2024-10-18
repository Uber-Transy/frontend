import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const HamburgerMenu = () => {
    return (
       <TouchableOpacity style={styles.container}>
              <Ionicons name={ 'menu' } size={24} color={'black'}/>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        left: 10,
        padding: 10,
        backgroundColor: Colors.schedule,
        borderRadius: 10,
    }
})

export default HamburgerMenu