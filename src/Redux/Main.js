import {combineReducers} from 'redux';
import {AppSettingsReducer} from './AppSettings/reducer';
import {ChatsReducer} from './Chats/reducer';
import {ProfileReducer} from './Profile/reducer';

export default combineReducers({
  AppSettingsReducer,
  ChatsReducer,
  ProfileReducer,
});
