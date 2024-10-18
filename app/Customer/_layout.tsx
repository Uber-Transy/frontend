import React from 'react'
import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

const Layout = ({ children }: { children: React.ReactNode }) => {

    const getTabIcon = (name: string, focused: boolean) => {
        switch (name) {
            case 'Home':
                return focused ? 'home' : 'home-outline';
            case 'Wallet':
                return focused ? 'wallet' : 'wallet-outline';
            case 'Offer':
                return focused ? 'pricetag' : 'pricetag-outline';
            case 'Favorites':
                return focused ? 'heart' : 'heart-outline';
            default:
                return 'alert-circle-outline';
        }
    }

    const getTabLabel = (name: string) => {
        switch (name) {
            case 'Home':
                return 'Home';
            case 'Favorites':
                return 'Favorites';
            case 'Wallet':
                return 'Wallet';
            case 'Offer':
                return 'Offer';
            default:
                return 'Unknown';
        }
    }

    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={getTabIcon(route.name, focused)}
                        size={size}
                        color={color}
                    />
                ),
                tabBarActiveTintColor: '#2f95dc',
                tabBarInactiveTintColor: '#ccc',
                tabBarLabel: getTabLabel(route.name),
            })}
        >
            {children}
        </Tabs>
    )
}

export default Layout