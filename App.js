import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ChatStack from './src/Chat/ChatStack';
import AuthStack from './src/Auth/AuthStack';
import AddChat from './src/Drawer/DrawerScreens/AddChat';
import Profile from './src/Drawer/DrawerScreens/Profile';
import Settings from './src/Drawer/DrawerScreens/Settings';

import DrawerComponent from './src/Drawer/DrawerComponent';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => DrawerComponent(props)}>
        <Drawer.Screen
          options={{gestureEnabled: false}}
          name="Auth"
          component={AuthStack}
        />
        <Drawer.Screen name="ChatStack" component={ChatStack} />
        <Drawer.Screen name="AddChat" component={AddChat} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
