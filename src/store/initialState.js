import userIsLoggedIn from '../utils/userIsLoggedIn';

const initialState = {
  auth: {
    isAuthenticated: userIsLoggedIn(),
    user: {},
  },
  users: {
    signingIn: false,
    error: '',
  },
  rides: {
    rideOffers: [],
    loadingRides: false,
    error: '',
  },
};

export default initialState;
