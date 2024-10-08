import React from 'react'
import {View, Text, StyleSheet, StatusBar, Image, useWindowDimensions, TouchableOpacity} from 'react-native'
import {useRouter} from "expo-router";
import img from '@/assets/images/Welcome Screen.png'
import Colors from '@/constants/Colors'

const Page = () => {
    const {width, height} = useWindowDimensions()
    const router = useRouter()

    return (
        <View style={[styles.container, {width}]}>
            <StatusBar barStyle="dark-content" />
            <View style={{flex: 0.7, alignItems:'center', justifyContent:'center'}}>
                <Image
                    source={img}
                    style={[styles.image, {width: width * 0.8, height: height * 0.4}]}
                />
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.description}>Have a better sharing experience</Text>
            </View>

            <View style={{flex: 0.3, alignItems:'center', justifyContent: 'center'}}>
            {/*    signup button*/}

                <TouchableOpacity onPress={()=>router.push('/Signup')} style={[styles.create, {width: width * 0.8, paddingVertical: height * 0.02}]}>
                    <Text style={styles.createText}>Create an Account</Text>
                </TouchableOpacity>

            {/*    login button*/}
                <TouchableOpacity onPress={()=>router.push('/Login')} style={[styles.login, {width: width * 0.8, paddingVertical: height * 0.02}]}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background
    },
    image:{
       marginBottom: 20,
        resizeMode: 'contain'
    },
    title:{
        fontSize: 30,
        color: Colors.gray,
        marginBottom: 10,
        fontWeight: '800'
    },
    description:{
        fontSize:16,
        color: Colors.gray,
        fontWeight: '300',
    },
    create:{
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    createText:{
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    login:{
        backgroundColor: Colors.background,
        borderRadius: 10,
        alignItems:'center',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    loginText:{
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default  Page
