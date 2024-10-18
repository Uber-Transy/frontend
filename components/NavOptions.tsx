import React from "react";
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image} from "react-native";
import Colors from "@/constants/Colors";
import {defaultStyles} from "@/constants/Styles";
import {useRouter} from "expo-router";

const data  = [
    {
        id: 1,
        title: "Register as a driver",
        image: require('@/assets/images/image 6.png') ,
        screen: "Driver"
    },
    {
        id: 2,
        title: "Register as a customer",
        image: require('@/assets/images/image 6.png') ,
        screen: "Customer"
    }
]

const NavOptions = () => {

    const router = useRouter()
    
    return(
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=> router.push(item.screen)} style={styles.container}>
                   <View>
                       <Image
                           source={item.image}
                           style={{ width: 150, height: 150, resizeMode: 'contain' }}
                       />
                       <Text style={[defaultStyles.h2,{color: Colors.primary}]}>{item.title}</Text>
                   </View>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 40,
        backgroundColor: Colors.white,
        marginTop: 50,
        borderRadius: 10
    }
})

export default NavOptions