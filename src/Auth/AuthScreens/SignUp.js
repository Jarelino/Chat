import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
      headerTintColor: this.props.textColor,
      title: 'SignUp',
    });
    this.state = {
      username: '',
    };
  }

  componentDidMount = () => {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.navigation.setOptions({
        headerStyle: {
          backgroundColor: this.props.headerBg,
        },
        headerTintColor: this.props.textColor,
        title: 'SignUp',
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

  changeUsernameHandler = username => {
    this.setState({username});
  };

  changeEmailHandler = email => this.props.ChangeEmail(email);
  changePasswordHandler = password => this.props.ChangePassword(password);

  submitHandler = async () => {
    auth()
      .createUserWithEmailAndPassword(this.props.email, this.props.password)
      .then(() => {
        auth().currentUser.updateProfile({displayName: this.state.username});
        this.props.navigation.navigate('ChatStack');
      })
      .catch(error => console.log(error));
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
        <TextInput
          placeholder={'Enter your name'}
          style={this.input(this.props.textColor)}
          value={this.state.username}
          onChangeText={this.changeUsernameHandler}
          placeholderTextColor="#b6baba"
        />
        <TouchableOpacity
          onPress={this.submitHandler}
          style={this.styles.btnBlock}>
          <Text style={this.styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  styles = StyleSheet.create({
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
