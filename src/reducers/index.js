import { combineReducers } from 'redux';
import users from './user.reducer';
import rides from './rideOffers.reducer';
import auth from './auth.reducer';
import rideDetails from './rideDetails.reducer';
import offerRide from './offerRide.reducer';
import myRides from './myRides.reducer';

const rootReducer = combineReducers({
  auth,
  users,
  rides,
  rideDetails,
  offerRide,
  myRides,
});

export default rootReducer;
