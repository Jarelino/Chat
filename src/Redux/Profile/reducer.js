import {CHANGE_USERNAME_ACTION} from './actions';

const defaultState = {
  username: '',
};

export const ProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME_ACTION:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};
