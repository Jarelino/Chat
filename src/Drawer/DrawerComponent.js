import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default function DrawerComponent(props) {
  const menuHandler = menuTitle => () => {
    props.navigation.navigate(menuTitle);
  };

  return (
    <View style={styles.app}>
      <View>
        <View style={styles.userBlock}>
          <Image
            style={styles.userImg}
            source={{
              uri:
                'https://static-s.aa-cdn.net/img/ios/880583411/bc1205e8d2579b350f6ca2d5de23447f?v=1',
            }}
          />
          <Text style={styles.userText}>Username</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={menuHandler('AddChat')}
            style={styles.menuBlock}>
            <Text style={styles.userText}>AddChat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={menuHandler('Profile')}
            style={styles.menuBlock}>
            <Text style={styles.userText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={menuHandler('Settings')}
            style={styles.menuBlock}>
            <Text style={styles.userText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnBlock}
        onPress={() => props.navigation.navigate('Auth')}>
        <Text style={styles.btnText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#272929',
    flex: 1,
    justifyContent: 'space-between',
  },
  userBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#233342FF',
  },
  userText: {
    color: '#FFF',
    marginLeft: 20,
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  menuBlock: {
    padding: 20,
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
