import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import AddChatContainer from './AddChatContainer';

export class AddChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUser: 'Roman',
    };
    this.props.navigation.setOptions({
      headerTitle: () => <Text style={this.styles.header}>Add Chat</Text>,
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
    });
  }

  submitUserHandler = () => {
    this.props.AddUser(this.state.inputUser);
    this.props.navigation.navigate('ChatList');
  };

  render() {
    return (
      <View style={this.styles.container}>
        <TextInput
          placeholder="Enter username"
          placeholderTextColor={this.props.textColor}
          style={this.styles.inputUsername}
          onChangeText={text => this.setState({inputUser: text})}
          value={this.state.inputUser}
        />
        <TouchableOpacity onPress={this.submitUserHandler}>
          <Text style={this.styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      backgroundColor: this.props.appBg,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    header: {
      color: this.props.textColor,
      fontSize: 20,
    },
    inputUsername: {
      borderWidth: 1,
      width: '50%',
      maxHeight: 60,
      borderColor: this.props.textColor,
      color: this.props.textColor,
      borderRadius: 5,
    },
    submitBtnText: {
      color: '#FFF',
      padding: 15,
      backgroundColor: 'blue',
      width: 80,
      textAlign: 'center',
      borderRadius: 5,
    },
  });
}

const Stack = createStackNavigator();

export default function AddChat() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddChatScreen" component={AddChatContainer} />
    </Stack.Navigator>
  );
}
