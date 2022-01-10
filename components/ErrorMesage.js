import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { lightColor } from '../helpers/colors'

const ErrorMesage = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.ops}>{text}</Text>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://icons.iconarchive.com/icons/icons8/android/128/Messaging-Sad-icon.png',
                }}
            />
        </View>
    )
}

export default ErrorMesage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ops: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: lightColor,
    },
    image: {
        width: 50,
        height: 50,
        marginTop: 20,
    },
})
