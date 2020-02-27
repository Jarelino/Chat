import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ChatStack from './src/Chat/ChatStack';
import AuthStack from './src/Auth/AuthStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Auth" component={AuthStack} />
        <Drawer.Screen name="ChatStack" component={ChatStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
