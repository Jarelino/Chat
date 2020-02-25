import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

import ChatList from './src/Chat/ChatList';
import Chat from './src/Chat/Chat';

import SignIn from './src/Auth/SignIn';
import SignUp from './src/Auth/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{headerLeft: null, title: 'Chats'}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
