import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '@/Slices/navSlice';

interface Location {
    lat: number;
    lng: number;
}

interface Origin {
    description: string;
    location: Location;
}

const MapComponents = () => {
    const origin: Origin | null = useSelector(selectOrigin);
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });

    useEffect(() => {
        if (origin && origin.location) {
            setRegion({
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });
        }
    }, [origin]);

    return (
        <MapView
            style={{ flex: 1 }}
            mapType={"mutedStandard"}
            initialRegion={region}
            region={region}
        >
            {origin && origin.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title={"Origin"}
                    description={origin.description}
                    identifier={"origin"}
                />
            )}
        </MapView>
    );
};

const styles = StyleSheet.create({});

export default MapComponents;
