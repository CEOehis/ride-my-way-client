import { combineReducers } from 'redux';
import users from './user.reducer';
import rides from './rideOffers.reducer';
import auth from './auth.reducer';

const rootReducer = combineReducers({
  auth,
  users,
  rides,
});

export default rootReducer;
