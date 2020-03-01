import {CHANGE_APP_BG, CHANGE_HEADER_BG, CHANGE_TEXT_COLOR} from './actions';

const defaultState = {
  appBg: '#272929',
  headerBg: '#233342FF',
  textColor: '#fff',
};

export const AppSettingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_APP_BG:
      return {...state, appBg: action.payload};
    case CHANGE_HEADER_BG:
      return {...state, headerBg: action.payload};
    case CHANGE_TEXT_COLOR:
      return {...state, textColor: action.payload};
    default:
      return state;
  }
};
