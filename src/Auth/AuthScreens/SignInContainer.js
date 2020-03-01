import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ChangeUsername, ChangePhone} from '../../Redux/Profile/actions';

import SignIn from './SignIn';

class SignInContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SignIn
        appBg={this.props.appBg}
        headerBg={this.props.headerBg}
        textColor={this.props.textColor}
        ChangeUsername={this.props.ChangeUsername}
        username={this.props.username}
        ChangePhone={this.props.ChangePhone}
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

const mapDispatchToProps = {
  ChangeUsername,
  ChangePhone,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInContainer);
