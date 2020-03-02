import React, {Component} from 'react';
import {connect} from 'react-redux';

import {SettingsScreen} from './Settings';
import {
  setTextColor,
  setHeaderBg,
  setAppBg,
} from '../../Redux/AppSettings/actions';

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SettingsScreen
        appBg={this.props.appBg}
        headerBg={this.props.headerBg}
        textColor={this.props.textColor}
        navigation={this.props.navigation}
        route={this.props.route}
        setTextColor={this.props.setTextColor}
        setHeaderBg={this.props.setHeaderBg}
        setAppBg={this.props.setAppBg}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    appBg: state.AppSettingsReducer.appBg,
    headerBg: state.AppSettingsReducer.headerBg,
    textColor: state.AppSettingsReducer.textColor,
  };
};

const mapDispatchToProps = {
  setTextColor,
  setHeaderBg,
  setAppBg,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsContainer);
