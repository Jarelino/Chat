import React, {Component} from 'react';
import {connect} from 'react-redux';

import DrawerComponent from './DrawerComponent';

class DrawerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return DrawerComponent({
      appBg: this.props.appBg,
      headerBg: this.props.headerBg,
      textColor: this.props.textColor,
      username: this.props.username,
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
    username: state.ProfileReducer.username,
  };
};

export default connect(mapStateToProps)(DrawerContainer);
