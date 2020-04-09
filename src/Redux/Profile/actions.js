export const CHANGE_EMAIL_ACTION = 'CHANGE_EMAIL_ACTION';
export const CHANGE_PASSWORD_ACTION = 'CHANGE_PASSWORD_ACTION';

export const ChangeEmail = username => ({
  type: CHANGE_EMAIL_ACTION,
  payload: username,
});

export const ChangePassword = phone => ({
  type: CHANGE_PASSWORD_ACTION,
  payload: phone,
});
