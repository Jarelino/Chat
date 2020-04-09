import {CHANGE_EMAIL_ACTION, CHANGE_PASSWORD_ACTION} from './actions';

const defaultState = {
  email: 'romayaruk@yandex.by',
  password: 'someCoolPassword',
};

export const ProfileReducer = (state = defaultState, action) => {
  console.log(state, action);
  switch (action.type) {
    case CHANGE_EMAIL_ACTION:
      return {
        ...state,
        username: action.payload,
      };
    case CHANGE_PASSWORD_ACTION:
      return {
        ...state,
        phone: action.payload,
      };
    default:
      return state;
  }
};
