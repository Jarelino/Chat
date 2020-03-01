import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Alert,
  Button,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerTintColor: this.props.textColor,
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text style={this.styles.menuBtn}>Menu</Text>
        </TouchableOpacity>
      ),
    });

    this.state = {
      users: this.props.users,
    };
  }

  chatHandler = title => () => {
    this.props.ChangeCurrentOpponent(title);
    this.props.navigation.navigate('Chat');
  };

  render() {
    return (
      <View style={this.styles.app}>
        <View>
          <FlatList
            data={this.props.users}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={this.styles.chatItem}
                onPress={this.chatHandler(item.username)}>
                <Image
                  style={this.styles.chatImg}
                  source={{
                    uri: item.image,
                  }}
                />
                <View>
                  <Text style={this.styles.chatTitle}>{item.username}</Text>
                  <Text style={this.styles.lastMsg}>
                    {item.messages[item.messages.length - 1].msg}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
  styles = StyleSheet.create({
    app: {
      backgroundColor: this.props.appBg,
      flex: 1,
      justifyContent: 'space-between',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuBtn: {
      color: this.props.textColor,
      margin: 10,
    },
    chatItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: 15,
      padding: 10,
      borderWidth: 1,
      borderTopWidth: 0,
    },
    chatTitle: {
      marginLeft: 40,
      color: '#FFF',
    },
    lastMsg: {
      marginLeft: 40,
      color: '#b6baba',
    },
    chatImg: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    btnBlock: {
      backgroundColor: 'blue',
      paddingVertical: 7,
      paddingHorizontal: 18,
      borderRadius: 10,
      marginTop: 10,
    },
    btnText: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
    },
  });
}
