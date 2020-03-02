import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ProfileScreen} from './Profile';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProfileScreen
        appBg={this.props.appBg}
        headerBg={this.props.headerBg}
        textColor={this.props.textColor}
        username={this.props.username}
        phone={this.props.phone}
        navigation={this.props.navigation}
        route={this.props.route}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    appBg: state.AppSettingsReducer.appBg,
    headerBg: state.AppSettingsReducer.headerBg,
    textColor: state.AppSettingsReducer.textColor,
    username: state.ProfileReducer.username,
    phone: state.ProfileReducer.phone,
  };
};

export default connect(mapStateToProps)(ProfileContainer);
