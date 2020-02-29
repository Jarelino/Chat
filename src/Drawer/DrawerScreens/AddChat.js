import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

class AddChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.props.navigation.setOptions({
      headerTitle: () => <Text style={{color: '#FFF'}}>Add Chat</Text>,
      headerStyle: {
        backgroundColor: '#233342FF',
      },
    });
  }

  render() {
    return (
      <View style={{backgroundColor: '#272929', flex: 1}}>
        <Text> AddChat </Text>
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default function AddChat() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddChatScreen" component={AddChatScreen} />
    </Stack.Navigator>
  );
}
