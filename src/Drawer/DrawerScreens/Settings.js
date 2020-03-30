import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SettingsContainer from './SettingsContainer';

export class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerTitle: () => (
        <Text style={this.headerTitle(this.props.textColor)}>Settings</Text>
      ),
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
    });
  }

  changeAppBg = color => this.props.setAppBg(color);

  changeHeaderBg = color => {
    this.props.setHeaderBg(color);
    this.props.navigation.setOptions({
      headerTitle: () => (
        <Text style={this.headerTitle(this.props.textColor)}>Settings</Text>
      ),
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
    });
  };

  changeTextColor = color => {
    this.props.setTextColor(color);
    this.props.navigation.setOptions({
      headerTitle: () => (
        <Text style={this.headerTitle(this.props.textColor)}>Settings</Text>
      ),
      headerStyle: {
        backgroundColor: this.props.headerBg,
      },
    });
  };

  headerTitle = color => ({
    color,
    fontSize: 20,
  });

  blockTitle = color => ({
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 25,
    color,
  });

  appContainer = color => ({
    flex: 1,
    backgroundColor: color,
  });

  changeThemeHandler = theme => () => {
    switch (theme) {
      case 'Dark':
        this.changeAppBg('#272929');
        this.changeHeaderBg('#515555');
        this.changeTextColor('#FFF')
        break;
      case 'Light':
        this.changeAppBg('#0088cc');
        this.changeHeaderBg('#fff');
        this.changeTextColor('#000');
        break;
      case 'Purple':
        this.changeAppBg('#a36ce7');
        this.changeHeaderBg('#8236de');
        this.changeTextColor('#FFF');
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View style={this.appContainer(this.props.appBg)}>
        <Text style={this.blockTitle(this.props.textColor)}>
          App Theme
        </Text>
        <View style={this.styles.colorContainer}>
          <TouchableOpacity onPress={this.changeThemeHandler('Dark')}>
            <View backgroundColor="#272929" style={this.styles.colorBlock}>
              <Text style={{color: '#fff'}}> Dark Theme </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeThemeHandler('Light')}>
            <View backgroundColor="#0088cc" style={this.styles.colorBlock}>
              <Text style={{color: '#fff'}}> Light Theme </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeThemeHandler('Purple')}>
            <View backgroundColor="#a36ce7" style={this.styles.colorBlock}>
              <Text style={{color: '#fff'}}> Purple Theme </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    colorContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    colorBlock: {
      height: 111,
      width: 111,
      alignItems: 'center',
      justifyContent: 'space-around',
      borderWidth: 3,
    },
  });
}

const Stack = createStackNavigator();

export default function Settings() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsContainer} />
    </Stack.Navigator>
  );
}
