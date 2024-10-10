import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {defaultStyles} from "@/constants/Styles";
import {Ionicons} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import {useRouter} from "expo-router";

const Page = () => {
    const router = useRouter()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isVisible, setIsVisible] = useState(true)
    const [visible, setVisible] = useState(true)

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>router.back()} style={[defaultStyles.back, { marginLeft: -20,marginTop: 10}]}>
                <Ionicons name="chevron-back" size={28} color={Colors.gray} />
                <Text style={defaultStyles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={defaultStyles.h1}>Set new password </Text>

            {/*    enter password area*/}
            <View style={{width: '100%', alignItems:'center'}}>
                <TextInput
                    placeholder={'Enter your Password'}
                    style={defaultStyles.email}
                    value={password}
                    onChangeText={setPassword}
                    keyboardType={'ascii-capable'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    secureTextEntry={visible}
                />
                <Ionicons
                    onPress={()=>{
                        setVisible(!visible)
                    }}
                    name={ visible ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    color={Colors.black}
                    style={{
                        position: 'absolute',
                        right: 40,
                        top: 20,
                    }}
                />
            </View>

            {/*    confirm password entry area*/}
            <View style={{width: '100%', alignItems:'center'}}>
                <TextInput
                    placeholder={'Enter your Password'}
                    style={[defaultStyles.email, {marginTop: 20}]}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    keyboardType={'ascii-capable'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    secureTextEntry={isVisible}
                />
                <Ionicons
                    onPress={()=>{
                        setIsVisible(!isVisible)
                    }}
                    name={ isVisible ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    color={Colors.black}
                    style={{
                        position: 'absolute',
                        right: 40,
                        top: 40,
                    }}
                />
            </View>

            <TouchableOpacity onPress={()=>router.replace('/Login')} style={defaultStyles.button}>
                <Text style={defaultStyles.buttonText}>Save</Text>
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
    }
})

export default Page