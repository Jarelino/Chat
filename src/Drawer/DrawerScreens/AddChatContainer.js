import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AddUser} from '../../Redux/Chats/actions';
import {AddChatScreen} from './AddChat';

class AddChatContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AddChatScreen
        appBg={this.props.appBg}
        headerBg={this.props.headerBg}
        textColor={this.props.textColor}
        AddUser={this.props.AddUser}
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
  };
};

const mapDispatchToProps = {
  AddUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddChatContainer);
