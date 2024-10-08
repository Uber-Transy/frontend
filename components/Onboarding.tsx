import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet, FlatList, Animated, TouchableOpacity} from 'react-native'
import {useRouter} from "expo-router";
import slides from '@/assets/data/slides'
import OnboardingItem from "@/components/onboardingItem";
import Paginator from "@/components/Paginator";
import NextButton from "@/components/NextButton";
import Colors from '@/constants/Colors'

const Onboarding = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const viewableItemsChanged = useRef(({ viewableItems }:{viewableItems: any[]}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    const router = useRouter()

    const scrollTo = () => {
        if(currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
            setCurrentIndex(currentIndex + 1)
        }else{
            router.replace('/Authentication')
        }
    }

    return(
        <View style={styles.container}>
                <TouchableOpacity onPress={()=> router.replace('/Authentication')} style={styles.skip}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            <View style={{flex:3}}>
                <FlatList
                    data={slides}
                    renderItem={({item})=><OnboardingItem item={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={item => item.id.toString()}
                    onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX } }}],{
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            <Paginator data={slides} scrollX={scrollX}/>

            <NextButton currentIndex={currentIndex} slidesLength={slides.length} scrollTo={scrollTo} percentage={(currentIndex + 1) * (100/slides.length)}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    skip:{
        alignSelf:'flex-end',
        padding: 20
    },
    skipText: {
        fontSize: 20,
        fontWeight: '400',
        color: Colors.gray,
    }
})

export default Onboarding