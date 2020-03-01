import {ADD_MY_MESSAGE_ACTION, ADD_OPPONENT_MESSAGE_ACTION} from './actions';

const defaultState = {
  messages: [],
};

export const ChatsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MY_MESSAGE_ACTION:
      return {
        ...state,
        messages: [...state.messages, {message: action.payload, author: 'me'}],
      };
    case ADD_OPPONENT_MESSAGE_ACTION:
      return {
        ...state,
        messages: [
          ...state.messages,
          {message: action.payload, author: 'opponent'},
        ],
      };
    default:
      return state;
  }
};
