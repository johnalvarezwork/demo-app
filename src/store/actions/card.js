import { ADD_COUNT, GET_DATA, POST_DATA } from '../actions/types';
import axios from 'axios';

// Get posts
export const addCount = (count) => (dispatch) => {
  dispatch({
    type: ADD_COUNT,
    payload: {
      newCount: count + 1,
    },
  });
};

export const getData = () => async (dispatch) => {
  console.log('hi');
  try {
    const res = await axios.get('/hello-world-bean');

    dispatch({
      type: GET_DATA,
      payload: { message: res.data.message },
    });
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const postData = (message) => async (dispatch) => {
  console.log(message);

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/data', { message }, config);

    dispatch({
      type: POST_DATA,
      payload: { message: res.data.message },
    });
  } catch (error) {
    console.log('Error: ' + error);
  }
};
