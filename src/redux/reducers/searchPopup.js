const searchPopupReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_QUERY':
      return true;
    case 'HIDE_QUERY':
      return false;
    default:
      return state;
  }
}

export default searchPopupReducer
