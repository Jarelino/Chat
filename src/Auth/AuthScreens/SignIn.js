import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
      headerTintColor: this.props.textColor,
      headerLeft: null,
      title: 'SignIn',
    });
  }

  changeEmailHandler = email => this.props.ChangeEmail(email);
  changePasswordHandler = password => this.props.ChangePassword(password);

  componentDidMount = () => {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.navigation.setOptions({
        headerStyle: {
          backgroundColor: this.props.headerBg,
        },
        headerTintColor: this.props.textColor,
        headerLeft: null,
        title: 'SignIn',
      });
    });
  };

  appContainer = color => ({
    flex: 1,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
  });

  input = color => ({
    padding: 10,
    color,
    width: '85%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFF',
    marginBottom: 10,
  });

  signUpHandler = () => {
    this.props.navigation.navigate('SignUp');
  };

  submitHandler = async () => {
    auth()
      .signInWithEmailAndPassword(this.props.email, this.props.password)
      .then(() => {
        this.props.navigation.navigate('ChatStack');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={this.appContainer(this.props.appBg)}>
        <TextInput
          placeholder="Enter your email"
          keyboardType="number-pad"
          style={this.input(this.props.textColor)}
          value={this.props.email}
          onChangeText={this.changeEmailHandler}
          placeholderTextColor="#b6baba"
        />
        <TextInput
          placeholder={'Enter your password'}
          style={this.input(this.props.textColor)}
          value={this.props.password}
          onChangeText={this.changePasswordHandler}
          placeholderTextColor="#b6baba"
        />
        <TouchableOpacity
          onPress={this.submitHandler}
          style={this.styles.btnBlock}>
          <Text style={this.styles.btnText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.signUpHandler}
          style={this.styles.btnBlock}>
          <Text style={this.styles.btnText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: this.props.appBg,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      padding: 10,
      color: this.props.textColor,
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
}
