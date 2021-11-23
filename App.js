import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

import NewNoteScreen from './src/screens/NewNoteScreen';
import { NotesProvider } from './src/context/NotesContext';



const Stack = createStackNavigator();

function App() {
  return (
        <NotesProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="NewNote" component={NewNoteScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </NotesProvider>
      
  );
}

export default App;