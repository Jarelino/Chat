import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class ChatHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={this.styles.headerContainer}>
        <Image
          style={this.styles.chatImg}
          source={{
            uri: this.props.image,
          }}
        />
        <Text style={this.styles.headerTitle}>{this.props.title}</Text>
      </View>
    );
  }
  styles = StyleSheet.create({
    headerContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      color: this.props.textColor,
    },
    chatImg: {
      height: 50,
      width: 50,
      borderRadius: 25,
      marginHorizontal: 10,
    },
  });
}
