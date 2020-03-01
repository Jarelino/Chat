export const ADD_MY_MESSAGE_ACTION = 'ADD_MY_MESSAGE_ACTION';
export const ADD_OPPONENT_MESSAGE_ACTION = 'ADD_OPPONENT_MESSAGE_ACTION';
export const ADD_USER_ACTION = 'ADD_USER_ACTION';
export const CHANGE_CURRENT_OPPONENT_ACTION = 'CHANGE_CURRENT_OPPONENT_ACTION';

export const AddUser = username => ({
  type: ADD_MY_MESSAGE_ACTION,
  payload: username,
});

export const ChangeCurrentOpponent = username => ({
  type: CHANGE_CURRENT_OPPONENT_ACTION,
  payload: username,
});

export const AddMyMsg = msg => ({
  type: ADD_MY_MESSAGE_ACTION,
  payload: msg,
});

export const AddOpponentMsg = msg => ({
  type: ADD_MY_MESSAGE_ACTION,
  payload: msg,
});
