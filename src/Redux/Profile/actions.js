export const CHANGE_EMAIL_ACTION = 'CHANGE_EMAIL_ACTION';
export const CHANGE_PASSWORD_ACTION = 'CHANGE_PASSWORD_ACTION';

export const ChangeEmail = email => ({
  type: CHANGE_EMAIL_ACTION,
  payload: email,
});

export const ChangePassword = password => ({
  type: CHANGE_PASSWORD_ACTION,
  payload: password,
});
