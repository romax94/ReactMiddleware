import * as constants from '../constants/index';
import { CALL_API } from '../services/api';

const getUsers = (data) => ({
  type: constants.GET_USERS,
  payload: data
});

export const fetchUsers = () => {
  return (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUsers(data));
      });
  };
};

export function login () {
  return (dispatch) => {
    return dispatch({
      [CALL_API]: {
        endpoint: 'test.com',
        method: 'GET',
        types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE']
      }
    });
  };
}
