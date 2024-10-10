import React, { useEffect, useState } from 'react';
import { useRouter } from "expo-router";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
import * as Localization from 'expo-localization'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from "@expo/vector-icons";
import Colors from '@/constants/Colors';

const Page = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState<CountryCode>('KE');
    const [callingCode, setCallingCode] = useState('254');
    const [gender, setGender] = useState('');

    // Detect the user's country code
    const detectCountry = () => {
        const  locales = Localization.getLocales();
        if(locales.length > 0 && locales[0].regionCode){
            console.log('the detected country code is:', locales)
            setCountryCode(locales[0].regionCode as unknown as CountryCode)
        }
    };

    // Effect to detect country code on component mount
    useEffect(() => {
        detectCountry();
    }, []);

    // Handle country selection from the picker
    const onSelectCountry = (country: any) => {
        setCountryCode(country.cca2 as CountryCode);
        setCallingCode(country.callingCode[0]);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior={"padding"}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
                            <Ionicons name="chevron-back" size={28} color={Colors.gray} />
                            <Text style={{ fontSize: 18, fontWeight: '100', marginLeft: 5 }}>Back</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.header} numberOfLines={2}>Sign up with your email or phone number</Text>
                            <View style={{ alignItems: 'center', marginTop: 20 }}>
                                {/* Name input area */}
                                <TextInput
                                    placeholder="Name"
                                    value={name}
                                    onChangeText={setName}
                                    style={styles.email}
                                    keyboardType={"default"}
                                    autoCapitalize={'words'}
                                />
                                {/* Email input area */}
                                <TextInput
                                    placeholder="Email"
                                    value={email}
                                    onChangeText={setEmail}
                                    style={[styles.email, { marginTop: 20 }]}
                                    keyboardType={"email-address"}
                                    autoCapitalize={'none'}
                                />
                                {/* Phone number entry area */}
                                <View style={[styles.email, { flexDirection: 'row', marginTop: 20 }]}>
                                    <CountryPicker
                                        countryCode={countryCode}
                                        withFlag
                                        withCallingCode
                                        withFilter
                                        onSelect={onSelectCountry}
                                    />
                                    <TextInput
                                        placeholder="Phone number"
                                        value={phoneNumber}
                                        onChangeText={setPhoneNumber}
                                        keyboardType="phone-pad"
                                        autoCapitalize="none"
                                    />
                                </View>
                                {/* Gender picker */}
                                <View style={[styles.email, { marginTop: 20, padding: 5 }]}>
                                    <RNPickerSelect
                                        onValueChange={setGender}
                                        items={[
                                            { label: 'Male', value: 'male' },
                                            { label: 'Female', value: 'female' },
                                            { label: 'Other', value: 'other' },
                                        ]}
                                        placeholder={{
                                            label: 'Select Gender....',
                                            value: null,
                                        }}
                                        style={pickerSelectStyles}
                                        value={gender}
                                    />
                                </View>
                                {/* Terms of service & privacy policy */}
                                <View style={styles.terms}>
                                    <Image
                                        source={require('@/assets/images/_check-circle.png')}
                                    />
                                    <Text numberOfLines={2}>
                                        By signing in you agree to the {" "}
                                        <TouchableOpacity style={{alignItems: 'center'}}>
                                            <Text style={{ color: Colors.primary }}>Terms of service</Text>
                                        </TouchableOpacity>
                                        {" "} and {" "}
                                        <TouchableOpacity>
                                            <Text style={{ color: Colors.primary }}> Privacy policy</Text>
                                        </TouchableOpacity>
                                    </Text>
                                </View>
                                {/* Sign up button */}
                                <TouchableOpacity onPress={()=>router.push('/Signup/Verify')} style={styles.button}>
                                    <Text style={{ fontSize: 18, fontWeight: '800', color: Colors.white }}>Sign Up</Text>
                                </TouchableOpacity>
                                {/* Login social media links */}
                                <View style={styles.social}>
                                    <View style={{ backgroundColor: Colors.gray, width: 150, height: 1 }} />
                                    <Text style={{ fontSize: 16, fontWeight: '300', color: Colors.gray }}>Or</Text>
                                    <View style={{ backgroundColor: Colors.gray, width: 150, height: 1 }} />
                                </View>
                                <View style={{ width: "100%", alignItems: 'center' }}>
                                    {/* Sign in with your Gmail/Google account */}
                                    <TouchableOpacity style={styles.link}>
                                        <Image
                                            source={require('@/assets/images/Gmail.png')}
                                        />
                                        <Text>Sign in with Gmail</Text>
                                    </TouchableOpacity>
                                    {/* Sign in with your Facebook account */}
                                    <TouchableOpacity style={styles.link}>
                                        <Image
                                            source={require('@/assets/images/Facebook.png')}
                                        />
                                        <Text>Sign in with Facebook</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => router.push('/Login')} style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: 18 }}>Already have an account?
                                        {" "}
                                        <Text style={{ color: Colors.primary }}>Sign In</Text>
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    back: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    header: {
        fontSize: 30,
        color: Colors.gray,
        marginTop: 15,
        marginLeft: 10,
    },
    email: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.lightGray,
        padding: 15,
        width: '90%',
        color: Colors.gray
    },
    terms: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    button: {
        padding: 15,
        backgroundColor: Colors.primary,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 25
    },
    social: {
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        padding: 10
    },
    link: {
        padding: 15,
        width: '90%',
        flexDirection: "row",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderColor: Colors.gray,
        borderWidth: 1,
        gap: 10
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
});

export default Page;
