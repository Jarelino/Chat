import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerStyle: {
        backgroundColor: '#233342FF',
      },
      headerTintColor: '#FFF',
      headerLeft: null,
      title: 'Chats',
    });
    this.state = {
      phone: '',
      name: '',
    };
  }

  handlerChange = key => val => {
    this.setState({
      [key]: val,
    });
  };

  signUpHandler = () => {
    this.props.navigation.navigate('SignUp');
  };

  submitHandler = async () => {
    // if (this.state.phone.length != 13) {
    //   Alert.alert('Error', 'Wrong phone number');
    // } else if (this.state.name.length < 3 || this.state.name.length > 12) {
    //   Alert.alert('Error', 'Allowed name length is 3-12 symbols');
    // } else {
    //   AsyncStorage.setItem('userPhone', this.state.phone);
    //   this.props.navigation.navigate('ChatList');
    // }

    this.props.navigation.navigate('ChatList');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your phone number"
          keyboardType="number-pad"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlerChange('phone')}
          placeholderTextColor="#b6baba"
        />
        <TextInput
          placeholder={'Enter your name'}
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handlerChange('name')}
          placeholderTextColor="#b6baba"
        />
        <TouchableOpacity onPress={this.submitHandler} style={styles.btnBlock}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signUpHandler} style={styles.btnBlock}>
          <Text style={styles.btnText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    color: '#FFF',
    width: '85%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFF',
    marginBottom: 10,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  },
  btnBlock: {
    backgroundColor: 'blue',
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginTop: 10,
  },
});
