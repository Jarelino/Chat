export const CHANGE_USERNAME_ACTION = 'CHANGE_USERNAME_ACTION';
export const CHANGE_PHONE_ACTION = 'CHANGE_PHONE_ACTION';

export const changeUsername = username => ({
  type: CHANGE_USERNAME_ACTION,
  payload: username,
});

export const changePhone = phone => ({
  type: CHANGE_PHONE_ACTION,
  payload: phone,
});
