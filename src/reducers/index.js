import { combineReducers } from 'redux';
import users from './user.reducer';
import rides from './rideOffers.reducer';

const rootReducer = combineReducers({
  users,
  rides,
});

export default rootReducer;
