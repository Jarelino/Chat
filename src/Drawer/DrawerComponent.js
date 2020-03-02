import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default function DrawerComponent({
  appBg,
  headerBg,
  textColor,
  navigation,
  username,
}) {
  const menuHandler = menuTitle => () => {
    navigation.navigate(menuTitle);
  };

  const styles = StyleSheet.create({
    app: {
      backgroundColor: appBg,
      flex: 1,
      justifyContent: 'space-between',
    },
    userBlock: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      backgroundColor: headerBg,
    },
    userText: {
      color: textColor,
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
          <Text style={styles.userText}>{username}</Text>
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
          <TouchableOpacity
            onPress={menuHandler('ChatStack')}
            style={styles.menuBlock}>
            <Text style={styles.userText}>Chats</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnBlock}
        onPress={() => navigation.navigate('Auth')}>
        <Text style={styles.btnText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
