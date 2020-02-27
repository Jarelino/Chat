import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './AuthScreens/SignIn';
import SignUp from './AuthScreens/SignUp';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
