import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigator} from '@react-navigation/stack';

import ChatList from './src/Chat/ChatList';
import SignIn from './src/Auth/SignIn';
import SignUp from './src/Auth/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{headerLeft: null, title: 'Chats'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
