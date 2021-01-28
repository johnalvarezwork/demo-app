import { ADD_COUNT, GET_DATA, POST_DATA } from '../actions/types';
const initialState = { count: 0, message: 'Here is some text' };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_COUNT:
      return {
        ...state,
        count: payload.newCount,
      };
    case GET_DATA:
      return {
        ...state,
        message: payload.message,
      };
    case POST_DATA:
      console.log(payload.message);
      return {
        ...state,
        message: payload.message,
      };
    default:
      return state;
  }
}

// case GET_DATA:
//       return {
//         ...state,
//         post: payload,
//       };
