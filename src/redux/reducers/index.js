import menuPopupReducer from './menuPopup'
import searchPopupReducer from './searchPopup'
import currentQueryReducer from './currentQueryReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  menu: menuPopupReducer,
  search: searchPopupReducer,
  query: currentQueryReducer
})

export default reducers