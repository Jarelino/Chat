import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ChatStack from './src/Chat/ChatStack';
import AuthStack from './src/Auth/AuthStack';
import DrawerComponent from './src/DrawerComponent';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={() => <DrawerComponent />}>
        <Drawer.Screen
          options={{gestureEnabled: false}}
          name="Auth"
          component={AuthStack}
        />
        <Drawer.Screen name="ChatStack" component={ChatStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
