import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import BrowseScreen from './screens/BrowseScreen';
import DetailsScreen from './screens/DetailsScreen';
import PlayerScreen from './screens/PlayerScreen';
import { thirdColor} from './helpers/colors';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
            <Stack.Navigator 
             screenOptions={{
                 headerStyle: { backgroundColor: thirdColor},
                 headerTintColor: '#ffffff',
  }}
  >
        <Stack.Screen
        options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
        name="Browse" 
        component={BrowseScreen}
        options={{ title: 'Movies'}}
         />
        <Stack.Screen  
        name="Details" 
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
         />
        <Stack.Screen 
        name="Player" 
        component={PlayerScreen}
        options={({ route }) => ({ 
          title: `Trailer: ${route.params.title}`
        })}
         />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


