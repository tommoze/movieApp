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

    const getVideo = async () => {
        try {
            const response = await axios.get(`${URL}${fetchVideo(id)}`)
            const videos = response.data.results
            setVideo(videos.length === 0 ? null : choseTrailer(videos))
            setError(false)
        } catch (error) {
            console.error(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const choseTrailer = (videos) => {
        const oficialTrailersName = videos.filter(
            (item) =>
                item.type === 'Trailer' && item.name === 'Official Trailer'
        )
        const otherOfficialTrailers = videos.filter(
            (item) => item.type === 'Trailer' && item.official
        )
        const officialTeasers = videos.filter(
            (item) => item.type === 'Teaser' && item.official
        )
        const officialClips = videos.filter(
            (item) => item.type === 'Clip' && item.official
        )
        const officialFeaturettes = videos.filter(
            (item) => item.type === 'Clip' && item.official
        )
        const officialBehindTheScenes = videos.filter(
            (item) => item.type === 'Behind the Scenes' && item.official
        )
        const nonOfficial = videos.filter((item) => !item.official)

        if (oficialTrailersName.length !== 0) {
            return oficialTrailersName[0].key
        } else if (otherOfficialTrailers.length !== 0) {
            return otherOfficialTrailers[0].key
        } else if (officialTeasers.length !== 0) {
            return officialTeasers[0].key
        } else if (officialClips.length !== 0) {
            return officialClips[0].key
        } else if (officialFeaturettes.length !== 0) {
            return officialFeaturettes[0].key
        } else if (officialBehindTheScenes.length !== 0) {
            return officialBehindTheScenes[0].key
        } else if (nonOfficial.length !== 0) {
            return nonOfficial[0].key
        } else {
            return null
        }
    }

    useEffect(() => {
        getVideo()
        if (error) {
            console.log(error)
        }
    }, [])

    const onStateChange = useCallback((state) => {
        if (state === 'ended') {
            setPlaying(false)
            Alert.alert('video has finished playing!')
        }
    }, [])

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
