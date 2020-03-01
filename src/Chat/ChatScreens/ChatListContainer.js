import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ChangeCurrentOpponent} from '../../Redux/Chats/actions';

import ChatList from './ChatList';

class ChatListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ChatList
        appBg={this.props.appBg}
        headerBg={this.props.headerBg}
        textColor={this.props.textColor}
        ChangeCurrentOpponent={this.props.ChangeCurrentOpponent}
        users={this.props.users}
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
    users: state.ChatsReducer.users,
  };
};

const mapDispatchToProps = {
  ChangeCurrentOpponent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatListContainer);
