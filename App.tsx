import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';
import Theme from "./src/theme";



import { NavigationContainer } from '@react-navigation/native';
import FeedContainer from './src/containers/Feed/Feed.container';
import GroupContainer from './src/containers/Group/Group.container';
const Stack = createStackNavigator();


export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
        >
          <Stack.Screen

            name="Feed"
            component={FeedContainer}
          />
          <Stack.Screen

            name="Group"
            component={GroupContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider >

  );
}
