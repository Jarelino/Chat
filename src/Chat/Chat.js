import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import ChatHeader from './ChatHeader';
import messages from './Messages';
import {TextInput, FlatList} from 'react-native-gesture-handler';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
    this.props.navigation.setOptions({
      headerTitle: () => (
        <ChatHeader
          navigation={this.props.navigation}
          route={this.props.route}
        />
      ),
      headerStyle: {
        backgroundColor: '#233342FF',
      },
      headerLeft: () => (
        <Button
          color="#233342FF"
          style={styles.backBtn}
          title="Back"
          onPress={() => this.props.navigation.goBack()}
        />
      ),
      headerTintColor: '#FFF',
    });

    this.state.messages = this.getMessages(this.props.route.params.title);
  }

  getMessages = name => {
    return messages[name];
  };

  sendMsg = () => {
    if (this.state.msg !== '') {
      this.setState({
        messages: [
          ...this.state.messages,
          {id: this.state.messages + 1, sender: 'Me', msg: this.state.msg},
        ],
        msg: '',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={this.state.messages}
            renderItem={({item}) => (
              <View
                style={
                  item.sender === 'Me'
                    ? styles.myMsgContainer
                    : styles.oppMsgContainer
                }>
                <Text
                  style={item.sender === 'Me' ? styles.myMsg : styles.oppMsg}>
                  {item.msg}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Message"
            style={styles.inputMsg}
            onChangeText={msg => this.setState({msg})}
            value={this.state.msg}
            placeholderTextColor="#b6baba"
          />
          <Button
            color="#3685FA"
            style={styles.sendBtn}
            title="send"
            onPress={this.sendMsg}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#272929',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputMsg: {
    borderBottomWidth: 0,
    padding: 5,
    flex: 1,
    backgroundColor: '#233342F0',
    color: '#FFF',
  },
  sendBtn: {
    borderRadius: 0,
  },
  myMsgContainer: {
    marginBottom: 5,
    alignItems: 'flex-end',
  },
  myMsg: {
    color: '#FFF',
    backgroundColor: '#3685FA',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    textAlign: 'right',
  },

  oppMsgContainer: {
    marginBottom: 5,
    alignItems: 'flex-start',
  },

  oppMsg: {
    color: '#FFF',
    backgroundColor: '#233342FF',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    textAlign: 'left',
  },
  backBtn: {
    marginLeft: 20,
  },
});
