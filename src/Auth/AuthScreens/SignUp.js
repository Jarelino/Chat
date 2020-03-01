import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

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
      code: '',
      confirmResult: '',
    };
  }

  handlerChange = key => val => {
    this.setState({[key]: val});
  };

  changeNameHandler = name => this.props.ChangeUsername(name);
  changePhoneHandler = phone => this.props.ChangePhone(phone);

  submitHandler = async () => {
    // if (!this.confirmResult) {
    //   if (this.state.phone.length != 13) {
    //     Alert.alert('Error', 'Wrong phone number');
    //   } else if (this.state.name.length < 3 || this.state.name.length > 12) {
    //     Alert.alert('Error', 'Allowed name length is 3-12 symbols');
    //   } else {
    //     Alert.alert('Verification', 'Enter code from sms');
    //     this.setState({confirmResult: true});
    //   }
    // } else {
    //   this.props.navigation.navigate('ChatList');
    // }

    this.props.navigation.navigate('ChatStack');
  };

  render() {
    return (
      <View style={this.styles.container}>
        <TextInput
          placeholder="Enter your phone number"
          keyboardType="number-pad"
          style={this.styles.input}
          value={this.props.phone}
          onChangeText={this.changePhoneHandler}
          placeholderTextColor="#b6baba"
        />
        <TextInput
          placeholder={'Enter your name'}
          style={this.styles.input}
          value={this.props.username}
          onChangeText={this.changeNameHandler}
          placeholderTextColor="#b6baba"
        />
        <TextInput
          placeholder={'Enter code from sms'}
          style={this.styles.input}
          value={this.state.code}
          onChangeText={this.handlerChange('code')}
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
