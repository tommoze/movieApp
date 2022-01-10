import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import { primaryColor, lightColor } from '../helpers/colors';


const Button = ({text, onPress}) => {

  return (
    <TouchableOpacity
    style={styles.button}
         onPress={onPress}
         >
      <Text  style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: lightColor,
    width: 200,

  },
  text: {
    paddingTop:5,
    paddingBottom:5,
    color: primaryColor,
    fontWeight:'bold'    
  }
})

export default Button
