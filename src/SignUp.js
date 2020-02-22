import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from './Firebase';

export default class SignUp extends Component {
  state = {
    code: '',
    phone: AsyncStorage.getItem('userPhone'),
    name: '',
  };

  handerChange = key => val => {
    this.setState({[key]: val});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your phone number"
          keyboardType="number-pad"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handerChange('phone')}
        />
        <TextInput
          placeholder={'Enter your name'}
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handerChange('name')}
        />
        <TextInput
          placeholder={'Enter your name'}
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handerChange('code')}
        />
        <TouchableOpacity onPress={this.submitHander} style={styles.btnBlock}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    color: '#000',
    width: '85%',
    borderWidth: 1,
    borderRadius: 5,
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
