import * as React from 'react';
import {Button, View, Text} from 'react-native';

export default function ChatList({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="LogOut" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
}
