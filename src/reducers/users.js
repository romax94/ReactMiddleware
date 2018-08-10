let initialState = {
  users: null
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state;
    default:
      return state;
  }
};
