import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ChatContainer from './ChatScreens/ChatContainer';
import ChatListContainer from './ChatScreens/ChatListContainer';

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator initialRouteName="ChatList">
      <Stack.Screen name="ChatList" component={ChatListContainer} />
      <Stack.Screen name="Chat" component={ChatContainer} />
    </Stack.Navigator>
  );
}
