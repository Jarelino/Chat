import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import ChatHeader from './ChatHeader';
import {
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: this.props.opponentInfo.messages,
    };

    this.props.navigation.setOptions({
      headerTitle: () => (
        <ChatHeader
          navigation={this.props.navigation}
          route={this.props.route}
          title={this.props.opponentInfo.username}
          image={this.props.opponentInfo.image}
          headerBg={this.props.headerBg}
          textColor={this.props.textColor}
        />
      ),
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={this.styles.backBtn}>Back</Text>
        </TouchableOpacity>
      ),
      headerTintColor: this.props.textColor,
    });
  }

  sendMsg = () => {
    if (this.state.msg !== '') {
      this.props.AddMyMsg(this.state.msg);
      this.setState({messages: this.props.opponentInfo.messages, msg: ''});
    }
  };

  render() {
    return (
      <View style={this.styles.container}>
        <View>
          <FlatList
            data={this.state.messages ? this.state.messages : null}
            renderItem={({item}) => (
              <View
                style={
                  item.author === 'Me'
                    ? this.styles.myMsgContainer
                    : this.styles.oppMsgContainer
                }>
                <Text
                  style={
                    item.author === 'Me'
                      ? this.styles.myMsg
                      : this.styles.oppMsg
                  }>
                  {item.msg}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={this.styles.inputContainer}>
          <TextInput
            placeholder="Message"
            style={this.styles.inputMsg}
            onChangeText={msg => this.setState({msg})}
            value={this.state.msg}
            placeholderTextColor="#b6baba"
          />
          <Button
            color="#3685FA"
            style={this.styles.sendBtn}
            title="send"
            onPress={this.sendMsg}
          />
        </View>
      </View>
    );
  }
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: this.props.appBg,
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
      margin: 10,
      color: this.props.textColor,
    },
  });
}
