import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
