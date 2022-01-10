import React from 'react'
import { View, StyleSheet } from 'react-native';

import VideoPlay from '../components/VideoPlay';
import { primaryColor } from '../helpers/colors';

const PlayerScreen = (props) => {
  
  const movie = props.route.params;
  return (
  
    <View  style={styles.container}>
      <VideoPlay
      style={styles.video}  
      id={movie.id}
      navigation={props.navigation}/>
    </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    width:'100%',
   paddingTop: 200,
   backgroundColor: primaryColor
  },
video: {
  width: '100%'
}
})
