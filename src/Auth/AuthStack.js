import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInContainer from './AuthScreens/SignInContainer';
import SignUpContainer from './AuthScreens/SignUpContainer';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false}}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInContainer} />
      <Stack.Screen name="SignUp" component={SignUpContainer} />
    </Stack.Navigator>
  );
}
