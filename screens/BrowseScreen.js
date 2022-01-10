import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import { fetch } from '../api/requests';
import MoviesList from '../components/MoviesList';
import { primaryColor } from '../helpers/colors';


const BrowseScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={fetch}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <MoviesList            
            navigation={navigation} 
            category={item.url} 
            categoryTitle={item.categoryTitle}
            />
        </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer:{
    minHeight: 280,
    margin: 10
  }

});





export default BrowseScreen;
