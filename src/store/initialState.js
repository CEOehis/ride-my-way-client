const initialState = {
  auth: {
    isAuthenticated: false,
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
