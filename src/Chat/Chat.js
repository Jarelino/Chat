import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ChatHeader from './ChatHeader';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.setOptions({
      headerTitle: () => (
        <ChatHeader
          navigation={this.props.navigation}
          route={this.props.route}
        />
      ),
    });
  }

  render() {
    return (
      <View>
        <Text>{this.props.route.params.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
