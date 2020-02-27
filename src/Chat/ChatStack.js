import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Chat from './ChatScreens/Chat';
import ChatList from './ChatScreens/ChatList';

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator initialRouteName="ChatList">
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
