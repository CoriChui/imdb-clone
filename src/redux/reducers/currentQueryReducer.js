const currentQueryReducer = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_QUERY':
      return action.payload;
    default:
      return state;
  }
}

export default currentQueryReducer;