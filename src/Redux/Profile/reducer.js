import {CHANGE_USERNAME_ACTION, CHANGE_PHONE_ACTION} from './actions';

const defaultState = {
  username: '',
  phone: '',
};

export const ProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME_ACTION:
      return {
        ...state,
        username: action.username,
      };
    case CHANGE_PHONE_ACTION:
      return {
        ...state,
        username: action.phone,
      };
    default:
      return state;
  }
};