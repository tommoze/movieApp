import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { IMAGE_URL } from '../api/constants'
import { secondaryColor, lightColor } from '../helpers/colors'

const MovieCard = ({ title, imgUrl, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image
                style={styles.image}
                source={{
                    uri: `${IMAGE_URL}${imgUrl}`,
                }}
            />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: secondaryColor,
        height: '100%',
        paddingTop: 10,
        width: 144,
        marginRight: 10,
    },
    title: {
        marginLeft: 4,
        width: 144,
        paddingBottom: 5,
        color: lightColor,
    },
    image: {
        height: 204,
        resizeMode: 'contain',
    },
})

export default MovieCard
