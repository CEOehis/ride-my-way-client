const initialState = {
  users: {
    token: '',
    user: {},
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
