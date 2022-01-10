import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

import Button from '../components/Button';
import { primaryColor, lightColor } from '../helpers/colors';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <Image
     style={styles.image}
     source={{
       uri: 'https://images.unsplash.com/photo-1588823400943-b85ba1a6d19a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80',
     }}/>
     <View style={styles.content}>
    <Text style={styles.header}>ReactSeals presents</Text>
    <View style={styles.buttonsContainer}>
      <Button     
      text='Browse'
      onPress={() =>
        navigation.navigate('Browse')
      }
      />
      <Button     
        text='Login'
        />     
    </View>
    <Text style={styles.bottomText}>ReactSeals internship program assigment app</Text>
      </View>   
    <StatusBar style="light" />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
   backgroundColor:primaryColor
  },
    content:{
    justifyContent: 'space-between',
    flex:1
  },
  image:{
    flex:1,
  },
  header:{
    fontSize:30,
    textAlign:'center',
    color:lightColor,
    letterSpacing:1.6,
    top:-20
  },
  buttonsContainer:{
    paddingBottom:50,
    marginLeft: 'auto',
    marginRight:'auto',
  },
  bottomText:{
    color:lightColor,
    textAlign:'center',
    paddingBottom:10
  }
});

export default HomeScreen
