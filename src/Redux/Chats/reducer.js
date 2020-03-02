import {
  ADD_MY_MESSAGE_ACTION,
  ADD_OPPONENT_MESSAGE_ACTION,
  ADD_USER_ACTION,
  CHANGE_CURRENT_OPPONENT_ACTION,
} from './actions';

const defaultState = {
  users: [
    {
      username: 'Vlad',
      image:
        'https://static-s.aa-cdn.net/img/ios/547582577/5609f1bb627c74633acebd9724f65271?v=1',
      messages: [
        {author: 'Me', msg: 'asdasf', id: '1'},
        {author: 'Opponent', msg: 'dasldasod', id: '2'},
      ],
      id: '1',
    },
    {
      username: 'Roman',
      image:
        'https://static-s.aa-cdn.net/img/ios/899287437/85565d75eef215a62730950452fa82c3?v=1',
      messages: [
        {author: 'Me', msg: 'asdasf', id: '1'},
        {author: 'Opponent', msg: 'vmfv', id: '2'},
      ],
      id: '2',
    },
    {
      username: 'Work',
      image:
        'https://pbs.twimg.com/profile_images/1215443846307278848/0PxQ3Gck_400x400.png',
      messages: [
        {author: 'Me', msg: 'asdasf', id: '1'},
        {author: 'Opponent', msg: 'vmmdl', id: '2'},
      ],
      id: '3',
    },
  ],
  usersId: {
    Vlad: 0,
    Roman: 1,
    Work: 2,
  },
  currentOpponent: '',
};

export const ChatsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER_ACTION:
      state.users = [
        ...state.users,
        {
          username: action.payload,
          image:
            'https://pbs.twimg.com/profile_images/1215443846307278848/0PxQ3Gck_400x400.png',
          messages: [{}],
          id: `${state.users.length + 1}`,
        },
      ];

      state.usersId = {
        ...state.usersId,
        [`${action.payload}`]: state.users.length - 1,
      };

      return {
        ...state,
      };
    case CHANGE_CURRENT_OPPONENT_ACTION:
      return {
        ...state,
        currentOpponent: action.payload,
      };
    case ADD_MY_MESSAGE_ACTION:
      state.users[state.usersId[`${state.currentOpponent}`]].messages = [
        ...state.users[state.usersId[`${state.currentOpponent}`]].messages,
        {
          author: 'Me',
          msg: action.payload,
          id: `${state.users[state.usersId[`${state.currentOpponent}`]].messages
            .length + 1}`,
        },
      ];

      return {
        ...state,
      };
    case ADD_OPPONENT_MESSAGE_ACTION:
      state.users[state.usersId[`${state.currentOpponent}`]].messages = [
        ...state.users[state.usersId[`${state.currentOpponent}`]].messages,
        {
          author: 'Opponent',
          msg: action.payload,
          id: `${state.users[state.usersId[`${state.currentOpponent}`]].messages
            .length + 1}`,
        },
      ];
      return {
        ...state,
      };
    default:
      return state;
  }
};
