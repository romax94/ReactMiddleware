import * as constants from '../constants/index';

export const fetchUsers = () => {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        dispatch(getUsers(data))
      })
  }
}

const getUsers = data => ({
  type: constants.GET_USERS,
  payload: data
})