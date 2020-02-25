import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class ChatHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.chatImg}
          source={{
            uri: this.props.route.params.image,
          }}
        />
        <Text style={styles.headerTitle}>{this.props.route.params.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  chatImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
});
