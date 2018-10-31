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
  offerRide: {
    loading: false,
    error: {},
    data: {},
  },
  myRides: {
    loading: false,
    error: '',
    data: [],
  },
  requests: {
    loading: false,
    error: '',
    rideInfo: {
      data: {},
      error: '',
    },
    requestInfo: {
      data: [],
      error: '',
    },
    requestResponseLoading: false,
  },
};

export default initialState;
