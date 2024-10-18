import React from 'react'
import {Tabs} from "expo-router";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            {children}
        </Tabs>
    )
}

export default Layout