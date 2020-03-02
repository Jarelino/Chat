import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export class AddChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUser: '',
    };

    this.props.navigation.setOptions({
      headerTitle: () => <Text style={this.styles.header}>Add Chat</Text>,
      headerStyle: {
        backgroundColor: '#233342FF',
      },
    });
  }

  render() {
    return (
      <View style={this.styles.container}>
        <TextInput
          placeholder="Enter username"
          placeholderTextColor="#FFF"
          style={this.styles.inputUsername}
          onChangeText={text => this.setState({inputUser: text})}
        />
        <TouchableOpacity>
          <Text style={this.styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      backgroundColor: '#272929',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    header: {
      color: '#FFF',
      fontSize: 20,
    },
    inputUsername: {
      borderWidth: 1,
      width: '50%',
      maxHeight: 60,
      borderColor: '#FFF',
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
      <Stack.Screen name="AddChatScreen" component={AddChatScreen} />
    </Stack.Navigator>
  );
}
