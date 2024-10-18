import React, {useState} from 'react'
import {useRouter} from "expo-router";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import Colors from '@/constants/Colors'

const Page = () =>{
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isVisible, setIsVisible] = useState(true);

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <KeyboardAvoidingView >
                <TouchableOpacity onPress={()=>router.back()} style={styles.back}>
                    <Ionicons name="chevron-back" size={28} color={Colors.gray}/>
                    <Text style={{fontSize: 18, fontWeight:'100', marginLeft: 5}}>Back</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.header} numberOfLines={2}>Sign in with your email or phone number</Text>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        {/*email input area*/}
                        <TextInput
                            placeholder="Email or Phone number"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.email}
                            keyboardType={"email-address"}
                            autoCapitalize={'none'}
                        />

                    {/*    password entry area*/}
                        <TextInput
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            style={[styles.email, {marginTop: 20}]}
                            keyboardType={"ascii-capable"}
                            autoCapitalize={'none'}
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
                                top: 100
                            }}
                        />
                    {/*    forgot password*/}
                        <TouchableOpacity onPress={()=>router.push('/Forgot-Password')} style={styles.password}>
                            <Text style={{color: Colors.red, fontWeight: '600'}}>Forgot password?</Text>
                        </TouchableOpacity>

                    {/*    sign in button*/}
                        <TouchableOpacity onPress={()=>router.push('/Customer/')} style={styles.button}>
                            <Text style={{fontSize: 18,fontWeight:'800', color: Colors.white}}>Sign In</Text>
                        </TouchableOpacity>

                    {/*    login social media links*/}
                        <View style={styles.social}>
                            <View style={{ backgroundColor: Colors.gray, width: 150, height: 1}}/>
                            <Text style={{fontSize: 16, fontWeight:'300',  color: Colors.gray}}>Or</Text>
                            <View style={{ backgroundColor: Colors.gray, width: 150,height: 1}} />
                        </View>

                        <View style={{width: "100%", alignItems: 'center'}}>
                            {/*sign in with your gmail/ google account*/}
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

                        <TouchableOpacity onPress={()=>router.push('/Signup')} style={{marginTop: 120}}>
                            <Text style={{fontSize: 18}}>Don't have an account?
                                 {" "}
                                <Text style={{color: Colors.primary}}>Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    back:{
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    header:{
        fontSize: 30,
        color: Colors.gray,
        marginTop: 15,
        marginLeft: 10,
    },
    email:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.lightGray,
        padding: 15,
        width: '90%',
        color: Colors.gray
    },
    password:{
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 5
    },
    button:{
        padding: 15,
        backgroundColor: Colors.primary,
        width: '90%',
        borderRadius: 10,
        alignItems:'center',
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
})

export default Page