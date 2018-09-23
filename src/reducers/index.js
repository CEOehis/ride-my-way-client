import { combineReducers } from 'redux';
import users from './user.reducer';

const rootReducer = combineReducers({
  index: (state = []) => state,
  users,
});

export default rootReducer;
