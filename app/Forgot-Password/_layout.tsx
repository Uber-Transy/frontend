import React from 'react'
import {Stack} from "expo-router";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            {children}
        </Stack>
    )
}

export default Layout