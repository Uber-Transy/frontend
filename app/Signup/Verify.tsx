import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import Colors from '@/constants/Colors'
import {useRouter} from "expo-router";
import {defaultStyles} from "@/constants/Styles";
import {Ionicons} from "@expo/vector-icons";

const CELL_COUNT = 6

const Page = () => {
    const router = useRouter()
    const [code, setCode] = useState("")
    const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: code,
        setValue: setCode,
    });

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>router.back()} style={[defaultStyles.back, { marginLeft: -20, marginTop: 10}]}>
                <Ionicons name="chevron-back" size={28} color={Colors.gray} />
                <Text style={defaultStyles.backText}>Back</Text>
            </TouchableOpacity>
           <Text style={[defaultStyles.h1,{marginTop: 40}]}>Email verification</Text>
            <Text style={styles.legal}>Enter the OTP code sent to your email</Text>
            <CodeField
                ref={ref}
                {...props}
                value={code}
                onChangeText={setCode}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <View
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cellRoot, isFocused && styles.focusCell]}
                    >
                        <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Didn't receive code?
                    {" "}
                    <Text style={{color: Colors.primary}}>Resend again</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> router.push('/Signup/SetPassword')} style={styles.verify}>
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
    codeFieldRoot: {
        marginTop: 20,
        width: 260,
        marginLeft: "auto",
        marginRight: "auto",
        gap: 4,
    },
    cellRoot: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
    },
    cellText: {
        color: Colors.gray,
        fontSize: 36,
        textAlign: "center",
    },
    focusCell: {
        paddingBottom: 4,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
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