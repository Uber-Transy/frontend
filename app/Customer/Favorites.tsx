import React, {useCallback, useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '@/Slices/navSlice';
import {useFocusEffect} from "@react-navigation/core";
import HamburgerMenu from "@/components/HamburgerMenu";

const Page = () => {
    const [favorites, setFavorites] = useState([]);
    const dispatch = useDispatch();

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

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

    const deleteFavorite = async (description) => {
        const newFavorites = favorites.filter((fav) => fav.description !== description);
        await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
        setFavorites(newFavorites);
        Alert.alert('Deleted', `${description} has been removed from favorites.`);
    };

    const goToLocation = (place) => {
        dispatch(setOrigin(place));
        dispatch(setDestination(null));
        Alert.alert('Navigating', `Setting ${place.description} as your origin.`);
    };

    const renderFavorite = ({ item }) => (
        <View style={styles.favoriteItem}>
            <Text style={styles.placeText}>{item.description}</Text>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => goToLocation(item)} style={styles.actionButton}>
                    <Ionicons name="navigate-outline" size={24} color={Colors.primary} />
                    <Text style={styles.actionText}>Go There</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deleteFavorite(item.description)} style={styles.actionButton}>
                    <Ionicons name="trash-outline" size={24} color="red" />
                    <Text style={[styles.actionText, { color: 'red' }]}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <HamburgerMenu/>
            <Text style={styles.header}>Favorite Places</Text>
            {favorites.length === 0 ? (
                <Text style={styles.noFavorites}>No favorite places found.</Text>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.description}
                    renderItem={renderFavorite}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.background,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 40,
        textAlign: 'center',
        color: Colors.primary,
    },
    noFavorites: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.gray,
    },
    favoriteItem: {
        backgroundColor: Colors.lightGray,
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placeText: {
        fontSize: 16,
        flex: 1,
        marginRight: 10,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    actionText: {
        marginLeft: 5,
        fontSize: 16,
        color: Colors.primary,
    },
});

export default Page;
