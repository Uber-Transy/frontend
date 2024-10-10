import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import Colors from '@/constants/Colors'

const CELL_COUNT = 6

const CodeFields = () => {
    const [code, setCode] = useState("")
    const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: code,
        setValue: setCode,
    });

    return(
        <View>
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
})

export default CodeFields