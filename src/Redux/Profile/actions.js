export const CHANGE_USERNAME_ACTION = 'CHANGE_USERNAME_ACTION';
export const CHANGE_PHONE_ACTION = 'CHANGE_USERNAME_ACTION';

export const changeUsername = username => ({
  type: CHANGE_USERNAME_ACTION,
  username,
});

export const changePhone = phone => ({
  type: CHANGE_PHONE_ACTION,
  phone,
});
