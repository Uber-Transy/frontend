import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {defaultStyles} from "@/constants/Styles";
import {Ionicons} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import {useRouter} from "expo-router";

const Page = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>router.back()} style={[defaultStyles.back, { marginLeft: -20, marginTop: 10}]}>
                <Ionicons name="chevron-back" size={28} color={Colors.gray} />
                <Text style={defaultStyles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={[defaultStyles.h2, {marginTop: 40}]}>Enter Your email Address</Text>

            <View style={{alignItems:'center', flex: 1}}>
                <TextInput
                    placeholder={'Enter your registered email'}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize={'none'}
                    autoComplete={'email'}
                    style={[defaultStyles.email, {marginTop: 20, alignItems:'center'}]}
                    keyboardType={"email-address"}
                />
            </View>

            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>router.push('/Forgot-Password/Verification')} style={defaultStyles.button}>
                    <Text style={defaultStyles.buttonText}>Send OTP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: Colors.background,
    }
})

export default Page