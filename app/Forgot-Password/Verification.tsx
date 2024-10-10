import React  from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Colors from '@/constants/Colors'
import {useRouter} from "expo-router";
import {defaultStyles} from "@/constants/Styles";
import {Ionicons} from "@expo/vector-icons";
import CodeFields from "@/components/CodeFields";


const Page = () => {
    const router = useRouter()

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>router.back()} style={[defaultStyles.back, { marginLeft: -20, marginTop: 10}]}>
                <Ionicons name="chevron-back" size={28} color={Colors.gray} />
                <Text style={defaultStyles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={[defaultStyles.h1,{marginTop: 40}]}>Email verification</Text>
            <Text style={styles.legal}>Enter the OTP code sent to your email</Text>

            <CodeFields/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Didn't receive code?
                    {" "}
                    <Text style={{color: Colors.primary}}>Resend again</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> router.push('/Forgot-Password/Set')} style={styles.verify}>
                <Text style={styles.verifyText}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        padding: 20,
        gap: 20,
    },
    legal: {
        fontSize: 14,
        textAlign: "center",
        color: Colors.gray,
    },
    button: {
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: Colors.gray,
        fontSize: 18,
    },
    verify:{
        width: '80%',
        backgroundColor: Colors.primary,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
    },
    verifyText:{
        color: Colors.white,
        fontWeight: '700',
        fontSize: 18
    },
})

export default Page