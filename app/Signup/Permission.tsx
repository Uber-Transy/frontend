import React , {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground, Image} from "react-native";
import * as Location from 'expo-location'
import {defaultStyles} from "@/constants/Styles";
import Colors from '@/constants/Colors'

const Page = () =>{
    const [locationPermission, setLocationPermission] = useState(false)

    useEffect(() => {
        (async () => {
            const {status} = await Location.getForegroundPermissionsAsync()
            setLocationPermission(status === 'granted')
        })()
    }, []);

    const requestLocationPermission = async () => {
        const {status} = await Location.getForegroundPermissionsAsync()
        if (status === 'granted') {
            Alert.alert("Location access granted", "You can now access your location.");
            setLocationPermission(true);
        } else {
            Alert.alert("Location access denied", "You can enable location access in settings.");
        }

    }

    const skipForLater = () => {
        Alert.alert("Location access skipped", "You can enable location access later in settings.");
    };

    return (

            <ImageBackground
                style={styles.container}
                source={require('@/assets/images/Map.png')}
            >
                <View style={styles.overlay} />

                <View style={defaultStyles.block}>
                    <Image
                        source={require('@/assets/images/Location.png')}
                    />
            <Text style={defaultStyles.h1}>Location Access</Text>
            <Text style={defaultStyles.p}>
                This app requires access to your location. Would you like to allow access now?
            </Text>
            <View style={{width: '100%'}}>
                <TouchableOpacity style={defaultStyles.button} onPress={requestLocationPermission}>
                    <Text style={defaultStyles.buttonText}>Allow Access</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[defaultStyles.button, {backgroundColor: Colors.lightGray}]} onPress={skipForLater}>
                    <Text style={[defaultStyles.buttonText, {color: Colors.gray}]}>Skip for Later</Text>
                </TouchableOpacity>
            </View>
                </View>
            </ImageBackground>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 0,
    },
})

export default Page