import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import Colors from "@/constants/Colors";

interface NextButtonProps {
    percentage: number;
    scrollTo: any;
    currentIndex: number;
    slidesLength: number;
}


const NextButton: React.FC<NextButtonProps> = ({ percentage, scrollTo, slidesLength, currentIndex }) => {
    const size = 128;
    const strokeWidth = 4;
    const padding = 5;
    const center = size / 2;
    const radius = (size / 2 - strokeWidth / 2) - padding;
    const outerRadius = size / 2 - strokeWidth / 2
    const circumference = 2 * Math.PI * outerRadius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef<Circle | null>(null);

    const animation = (toValue: number) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        const listenerId = progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;

            if (progressRef.current) {

                progressRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }
        });


        return () => {
            progressAnimation.removeListener(listenerId);
        };
    }, [circumference, progressAnimation]);

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle
                        stroke={Colors.white}
                        fill="none"
                        cx={center}
                        cy={center}
                        r={outerRadius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        ref={progressRef}
                        stroke={Colors.primary}
                        fill="none"
                        cx={center}
                        cy={center}
                        r={outerRadius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                    />
                </G>
            </Svg>
            <TouchableOpacity onPress={scrollTo} style={styles.button}>
                {currentIndex < slidesLength - 1 ? (
                    <Ionicons name="arrow-forward" size={24} color='white' />
                ):(
                    <Text style={{color: 'white', fontSize: 22, fontWeight:'800'}}>Go</Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: Colors.primary,
        borderRadius: 100,
        padding: 40,
    },
});

export default NextButton;
