import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AddOpponentMsg, AddMyMsg} from '../../Redux/Chats/actions';

import Chat from './Chat';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Chat
        appBg={this.props.appBg}
        headerBg={this.props.headerBg}
        textColor={this.props.textColor}
        username={this.props.currentOpponent}
        navigation={this.props.navigation}
        route={this.props.route}
        opponentInfo={this.props.opponentInfo}
        AddMyMsg={this.props.AddMyMsg}
        AddOpponentMsg={this.props.AddOpponentMsg}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    appBg: state.AppSettingsReducer.appBg,
    headerBg: state.AppSettingsReducer.headerBg,
    textColor: state.AppSettingsReducer.textColor,
    currentOpponent: state.ChatsReducer.currentOpponent,
    opponentInfo:
      state.ChatsReducer.users[
        state.ChatsReducer.usersId[`${state.ChatsReducer.currentOpponent}`]
      ],
  };
};

const mapDispatchToProps = {
  AddMyMsg,
  AddOpponentMsg,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatContainer);
