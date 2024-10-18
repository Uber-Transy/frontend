import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { defaultStyles } from '@/constants/Styles';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setDestination, setOrigin } from '@/Slices/navSlice';
import Colors from '@/constants/Colors';
import MapComponents from '@/components/MapComponents';
import HamburgerMenu from '@/components/HamburgerMenu';
import NotificationBell from '@/components/NotificationBell';
import { Ionicons } from '@expo/vector-icons';
import {useRouter} from "expo-router";

const Page = () => {
    const dispatch = useDispatch();
    const [favorites, setFavorites] = useState<{ description: string }[]>([]);  // <--- Explicitly typed
    const [currentInput, setCurrentInput] = useState('');
    const inputRef = useRef(null);
    const router = useRouter()

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem('favorites');
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        } catch (error) {
            console.error('Failed to load favorites:', error);
        }
    };


    const saveFavorites = async (newFavorites: { description: string }[]) => {
        try {
            const jsonValue = JSON.stringify(newFavorites);
            await AsyncStorage.setItem('favorites', jsonValue);
            setFavorites(newFavorites);
        } catch (error) {
            console.error('Error saving favorites:', error);
        }
    };


    const addToFavorites = async (newFavorites: { description: string }[]) => {
        if (!currentInput.trim()) {
            Alert.alert('Invalid Input', 'Please enter a valid place.');
            return;
        }

        const alreadyExists = favorites.some(
            (fav) => fav.description === currentInput
        );

        if (!alreadyExists) {
            const newFavorites = [...favorites, { description: currentInput }];
            saveFavorites(newFavorites);
            Alert.alert('Added to Favorites', `${currentInput} has been added.`);
        } else {
            Alert.alert('Already in Favorites', 'This place is already in your favorites.');
        }
    };

    return (
        <View style={styles.container}>
            <MapComponents />
            <HamburgerMenu />
            <NotificationBell />
            <View style={styles.block}>
                <View style={styles.inputContainer}>
                    <GooglePlacesAutocomplete
                        ref={inputRef}
                        placeholder="Where From?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        styles={{
                            container: { flex: 1 },
                            textInput: {
                                fontSize: 18,
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                                borderColor: Colors.white,
                                borderWidth: 1,
                                borderRadius: 8,
                                backgroundColor: Colors.background,
                                color: Colors.gray,
                            },
                            listView: {
                                borderRadius: 15,
                                elevation: 3,
                                backgroundColor: Colors.background,
                                marginTop: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 4,
                            },
                        }}
                        query={{
                            key: ,
                            language: 'en',
                        }}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        minLength={2}
                        onPress={(data, details = null) => {
                            if (details) {
                                const place = {
                                    location: details.geometry.location,
                                    description: data.description,
                                };
                                setCurrentInput(data.description); // Store the input
                                dispatch(setOrigin(place));
                                dispatch(setDestination(null));
                            } else {
                                console.log('Details is null');
                            }
                        }}
                    />
                    <TouchableOpacity
                        onPress={addToFavorites}
                        style={styles.heartButton}
                    >
                        <Ionicons
                            name={favorites.some(fav => fav.description === currentInput) ? "heart" : "heart-outline"}
                            size={28}
                            color={favorites.some(fav => fav.description === currentInput) ? "red" : Colors.lightGray}
                        />
                    </TouchableOpacity>

                </View>
                <View style={styles.content}>
                    <TouchableOpacity onPress={()=>router.push('/Customer/Home/Maps')} style={[defaultStyles.button, { width: '45%' }]}>
                        <Text style={[defaultStyles.buttonText, { fontSize: 16 }]}>Book Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            defaultStyles.button,
                            { width: '45%', backgroundColor: Colors.lightGray },
                        ]}
                    >
                        <Text
                            style={[
                                defaultStyles.buttonText,
                                { fontSize: 16, color: Colors.gray },
                            ]}
                        >
                            Schedule for later
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    block: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 2,
        paddingHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: Colors.schedule,
        marginHorizontal: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        borderRadius: 8,
        overflow: 'hidden',
    },
    heartButton: {
        marginLeft: 10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
    },
});

export default Page;
