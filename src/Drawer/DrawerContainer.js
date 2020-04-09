import React, {Component} from 'react';
import {connect} from 'react-redux';

import DrawerComponent from './DrawerComponent';
import auth from '@react-native-firebase/auth';
class DrawerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return DrawerComponent({
      appBg: this.props.appBg,
      headerBg: this.props.headerBg,
      textColor: this.props.textColor,
      username: auth().currentUser.displayName,
      navigation: this.props.props.navigation,
      route: this.props.props.route,
    });
  }
}

const mapStateToProps = state => {
  return {
    appBg: state.AppSettingsReducer.appBg,
    headerBg: state.AppSettingsReducer.headerBg,
    textColor: state.AppSettingsReducer.textColor,
  };
};

export default connect(mapStateToProps)(DrawerContainer);
