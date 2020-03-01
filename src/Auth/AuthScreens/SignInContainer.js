import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeUsername, changePhone} from '../../Redux/Profile/actions';

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
        changeUsername={this.props.changeUsername}
        username={this.props.username}
        changePhone={this.props.changePhone}
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
  };
};

const mapDispatchToProps = {
  changeUsername,
  changePhone,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInContainer);
