import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#233342FF',
      },
      headerLeft: null,
    });

    this.state = {
      chats: [
        {
          title: 'Roma',
          lastMsg: '132',
          id: '1',
          image:
            'https://static-s.aa-cdn.net/img/ios/547582577/5609f1bb627c74633acebd9724f65271?v=1',
        },
        {
          title: 'Vlad',
          lastMsg: '649',
          id: '2',
          image:
            'https://static-s.aa-cdn.net/img/ios/899287437/85565d75eef215a62730950452fa82c3?v=1',
        },
        {
          title: 'WorkChat',
          lastMsg: '54896',
          id: '3',
          image:
            'https://pbs.twimg.com/profile_images/1215443846307278848/0PxQ3Gck_400x400.png',
        },
      ],
    };
  }

  chatHandler = (title, image) => () => {
    this.props.navigation.navigate('Chat', {title, image});
  };

  render() {
    return (
      <View style={styles.app}>
        <View>
          <FlatList
            data={this.state.chats}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.chatItem}
                onPress={this.chatHandler(item.title, item.image)}>
                <Image
                  style={styles.chatImg}
                  source={{
                    uri: item.image,
                  }}
                />
                <View>
                  <Text style={styles.chatTitle}>{item.title}</Text>
                  <Text style={styles.lastMsg}>{item.lastMsg}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <TouchableOpacity
          style={styles.btnBlock}
          onPress={() => this.props.navigation.navigate('Auth')}>
          <Text style={styles.btnText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#272929',
    flex: 1,
    justifyContent: 'space-between',
  },
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
