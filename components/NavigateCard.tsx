import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import {defaultStyles} from "@/constants/Styles";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

const NavigateCard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={[defaultStyles.h2, {textAlign: 'center'}]}>Good Morning, Karienye</Text>
            <View style={styles.input}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where To?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        query={{
                            key: ,
                            language: 'en',
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1
    },
    input: {
        borderTopWidth: 1,
        borderTopColor: Colors.lightGray,
        flexShrink: 1
    }
})

const toInputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: Colors.white,
        paddingTop: 20,
    },
    textInput: {
        backgroundColor: Colors.lightGray,
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})

export default NavigateCard