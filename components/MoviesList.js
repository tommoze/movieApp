import React, { useState, useEffect, useCallback } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList,
} from 'react-native'

import { URL } from '../api/constants'
import axios from 'axios'
import MovieCard from './MovieCard'
import ErrorMesage from './ErrorMesage'
import { lightColor } from '../helpers/colors'

const keyExtractor = (item) => item.id
const renderItem =
    (onPress) =>
    ({ item }) =>
        (
            <MovieCard
                title={item.title}
                imgUrl={item.poster_path}
                onPress={onPress(item)}
            />
        )

const MoviesList = ({ navigation, category, categoryTitle, id }) => {
    const [isLoading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)

    const getMovies = useCallback(async () => {
        try {
            const response = await axios.get(`${URL}${category}${page}`)
            const results = response.data.results

            setMovies([...movies, ...results])
            setError(false)
        } catch (err) {
            console.error(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [setMovies, setError, setLoading, category, page, movies])

    const onEndReached = useCallback(() => setPage(page + 1), [setPage, page])

    const onPress = useCallback(
        (item) => () =>
            navigation.push('Details', {
                title: item.title,
                imgUrl: item.poster_path,
                overview: item.overview,
                id: item.id,
                date: item.release_date,
            }),
        [navigation]
    )

    useEffect(getMovies, [page])

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.categoryTitle}>{categoryTitle}</Text>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
                <ErrorMesage text="Ops, something went wrong!" />
            ) : (
                <FlatList
                    horizontal={true}
                    data={movies}
                    keyExtractor={keyExtractor}
                    onEndReached={onEndReached}
                    renderItem={renderItem(onPress)}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10,
        letterSpacing: 1.2,
        marginLeft: 4,
        color: lightColor,
    },
})

export default MoviesList
