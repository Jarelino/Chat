import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ChangeEmail, ChangePassword} from '../../Redux/Profile/actions';

import SignUp from './SignUp';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SignUp
        appBg={this.props.appBg}
        headerBg={this.props.headerBg}
        textColor={this.props.textColor}
        ChangeEmail={this.props.ChangeEmail}
        email={this.props.email}
        ChangePassword={this.props.ChangePassword}
        password={this.props.password}
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
    email: state.ProfileReducer.email,
    password: state.ProfileReducer.password,
  };
};

const mapDispatchToProps = {
  ChangeEmail,
  ChangePassword,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpContainer);
