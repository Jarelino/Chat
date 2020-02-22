import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home';
import LoginForm from './src/LoginForm';
import SignUp from './src/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginForm} title="SignIn" />
        <Stack.Screen name="Home" component={Home} title="Home" />
        <Stack.Screen name="SignUp" component={SignUp} title="SignUp" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
