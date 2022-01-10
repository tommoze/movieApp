import React, { useState, useEffect, useCallback, useRef } from 'react'
import { View, Alert, ActivityIndicator } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import axios from 'axios'

import { URL } from '../api/constants'
import { fetchVideo } from '../api/requests'
import ErrorMesage from './ErrorMesage'

const VideoPlay = ({ id }) => {
    const [isLoading, setLoading] = useState(true)
    const [video, setVideo] = useState([])
    const [error, setError] = useState(false)
    const [playing, setPlaying] = useState(false)
    const playerRef = useRef()

    const getVideo = useCallback(async () => {
        try {
            const response = await axios.get(`${URL}${fetchVideo(id)}`)
            const videos = response.data.results
            setVideo(videos.length === 0 ? null : choseTrailer(videos))
            setError(false)
        } catch (err) {
            console.error(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [setVideo, choseTrailer, fetchVideo, setError, setLoading])

    const choseTrailer = useCallback((videos) => {
        const oficialTrailers = videos.filter(
            (item) =>
                item.type === 'Trailer' && item.name === 'Official Trailer'
        )

        if (oficialTrailers.length) {
            return oficialTrailers[0].key
        }

        const types = [
            'Trailer',
            'Teaser',
            'Clip',
            'Featurette',
            'Behind the Scenes',
        ]
        const oficialVideos = types
            .map((type) =>
                videos.filter((video) => video.type == type && video.official)
            )
            .reduce((acc, cur) => [...acc, ...cur], [])

        if (oficialVideos.length) {
            return oficialVideos[0].key
        }

        return null
    }, [])

    useEffect(getVideo, [])

    const onStateChange = useCallback(
        (state) => {
            if (state === 'ended') {
                setPlaying(false)
                Alert.alert('video has finished playing!')
            }
        },
        [setPlaying]
    )

    return (
        <View style={{ flex: 1 }}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : video === null || error ? (
                <View style={{ flex: 1, top: -200 }}>
                    <ErrorMesage text={'Ops, looks like no video was found!'} />
                </View>
            ) : (
                <YoutubePlayer
                    style={{ flex: 1 }}
                    ref={playerRef}
                    height={300}
                    play={playing}
                    videoId={video}
                    onChangeState={onStateChange}
                />
            )}
        </View>
    )
}

export default VideoPlay
