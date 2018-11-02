import * as types from './action.types';

const fetchOfferedHistoryLoading = isFetching => ({
  type: types.LOAD_OFFERED_HISTORY_REQUEST,
  payload: isFetching,
});

const fetchOfferedHistorySuccess = rides => ({
  type: types.LOAD_OFFERED_HISTORY_SUCCESS,
  payload: rides,
});

const fetchOfferedHistoryError = error => ({
  type: types.LOAD_OFFERED_HISTORY_ERROR,
  payload: error,
});

const fetchOfferedHistory = () => (dispatch) => {
  dispatch(fetchOfferedHistoryLoading(true));
  const { token } = localStorage;
  return fetch(`${__API__}/api/v1/rides/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then((response) => {
      dispatch(fetchOfferedHistoryLoading(false));
      dispatch(fetchOfferedHistorySuccess(response.rides));
    })
    .catch(() => {
      dispatch(fetchOfferedHistoryLoading(false));
      dispatch(fetchOfferedHistoryError('Unable to fetch history'));
    });
};

export default fetchOfferedHistory;
