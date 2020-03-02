import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileContainer from './ProfileContainer';

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.props.navigation.setOptions({
      headerTitle: () => <Text style={this.styles.header}>Profile</Text>,
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
    });
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Image
          style={this.styles.userImg}
          source={{
            uri:
              'https://static-s.aa-cdn.net/img/ios/880583411/bc1205e8d2579b350f6ca2d5de23447f?v=1',
          }}
        />
        <View style={this.styles.infoContainer}>
          <Text style={this.styles.username}>{this.props.username}</Text>
        </View>
        <View>
        <Text style={this.styles.phone}>{this.props.phone}</Text>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: this.props.appBg,
    },
    header: {
      color: this.props.textColor,
      fontSize: 20,
    },
    userImg: {
      marginTop: 30,
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    username: {
      margin: 15,
      color: this.props.textColor,
      fontSize: 30,
      fontWeight: 'bold',
    },
    phone: {
      color: this.props.textColor,
      fontSize: 20,
    },
  });
}

const Stack = createStackNavigator();

export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileContainer} />
    </Stack.Navigator>
  );
}
