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

  changeAppBgHandler = color => () => this.props.setAppBg(color);

  changeHeaderBgHandler = color => () => {
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

  changeTextColorHandler = color => () => {
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

  render() {
    return (
      <View style={this.appContainer(this.props.appBg)}>
        <Text style={this.blockTitle(this.props.textColor)}>
          App background
        </Text>
        <View style={this.styles.colorContainer}>
          <TouchableOpacity onPress={this.changeAppBgHandler('#272929')}>
            <View backgroundColor="#272929" style={this.styles.colorBlock}>
              <Text style={{color: '#fff'}}> Dark Threme </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeAppBgHandler('#0088cc')}>
            <View backgroundColor="#0088cc" style={this.styles.colorBlock}>
              <Text style={{color: '#fff'}}> Light Threme </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeAppBgHandler('#a36ce7')}>
            <View backgroundColor="#a36ce7" style={this.styles.colorBlock}>
              <Text style={{color: '#fff'}}> Purple Threme </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={this.blockTitle(this.props.textColor)}>
          Header background
        </Text>
        <View style={this.styles.colorContainer}>
          <TouchableOpacity onPress={this.changeHeaderBgHandler('#515555')}>
            <View backgroundColor="#515555" style={this.styles.colorBlock}>
              <Text style={{color: '#fff'}}> Dark Threme </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeHeaderBgHandler('#fff')}>
            <View backgroundColor="#fff" style={this.styles.colorBlock}>
              <Text style={{color: '#000'}}> Light Threme </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeHeaderBgHandler('#8236de')}>
            <View backgroundColor="#8236de" style={this.styles.colorBlock}>
              <Text style={{color: '#fff'}}> Purple Threme </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={this.blockTitle(this.props.textColor)}>Text color</Text>
        <View style={this.styles.colorContainer}>
          <TouchableOpacity onPress={this.changeTextColorHandler('#FFF')}>
            <View backgroundColor="#FFF" style={this.styles.colorBlock}>
              <Text style={{color: '#000'}}> White </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeTextColorHandler('#000')}>
            <View backgroundColor="#000" style={this.styles.colorBlock}>
              <Text style={{color: '#fff'}}> Black </Text>
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
