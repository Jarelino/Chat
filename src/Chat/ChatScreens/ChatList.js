import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerTintColor: this.props.textColor,
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
      headerLeft: () => (
        <Icon
          name="menu"
          onPress={this.props.navigation.openDrawer}
          style={this.styles.menuBtn}
        />
      ),
    });

    this.state = {
      users: this.props.users,
      refresh: true,
    };
  }

  componentDidMount = () => {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.state.users = this.props.users;
      this.setState({
        refresh: !this.state.refresh,
      });

      this.appContainer(this.state.appBg);
      this.menuBtn(this.props.textColor);
      this.chatInfo(this.props.textColor);
      this.props.navigation.setOptions({
        headerStyle: {
          backgroundColor: this.props.headerBg,
        },
        headerTintColor: this.props.textColor,
      });
    });
  };

  componentWillUnmount = () => {
    this._unsubscribe();
  };

  chatHandler = title => () => {
    this.props.ChangeCurrentOpponent(title);
    this.props.navigation.navigate('Chat');
  };

  render() {
    return (
      <View style={this.appContainer(this.props.appBg)}>
        <View>
          <FlatList
            data={this.state.users}
            extraData={this.state.refresh}
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
                  <Text style={this.chatInfo(this.props.textColor)}>
                    {item.username}
                  </Text>
                  <Text style={this.chatInfo(this.props.textColor)}>
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
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    chatItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: 15,
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#0000001f',
    },
    lastMsg: {
      marginLeft: 40,
      color: '#b6baba',
    },
    chatImg: {
      height: 55,
      width: 55,
      borderRadius: 25,
    },
    menuBtn: {
      fontSize: 30,
      margin: 10,
      color: this.props.textColor,
    },
  });

  appContainer = color => ({
    backgroundColor: color,
    flex: 1,
    justifyContent: 'space-between',
  });

  menuBtn = color => ({
    color,
    margin: 10,
  });

  chatInfo = color => ({
    marginLeft: 40,
    color,
  });
}
