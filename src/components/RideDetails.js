/* eslint-disable no-nested-ternary */
import React, { Fragment } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import parseTime from '../utils/parseTime';

const RideDetails = ({
  ride,
  user,
  requested,
  handleRequest,
  requesting,
}) => {
  const {
    origin,
    destination,
    departureDate,
    departureTime,
    seats,
    rideId,
    rideCreator,
    email,
    phone,
  } = ride;
  if (!Object.keys(ride).length) return null;
  return (
    <Fragment>
      <h1>
        {origin}
        {' '}
        to
        {' '}
        {destination}
      </h1>
      <div className="ride-details">
        <div className="trip">
          <h1>Trip information</h1>
          <table>
            <tbody>
              <tr>
                <td>From: </td>
                <td>
                  {origin}
                </td>
              </tr>
              <tr>
                <td>To: </td>
                <td>
                  {destination}
                </td>
              </tr>
              <tr>
                <td>Departing: </td>
                <td>
                  {moment(departureDate).format('MMM DD, YYYY')}
                  ,
                  {parseTime(departureTime)}
                </td>
              </tr>
              <tr>
                <td>Available seats: </td>
                <td>
                  {seats}
                </td>
              </tr>
              <tr>
                <td>status: </td>
                <td>Available</td>
              </tr>
            </tbody>
          </table>
          <div className="call-to-action">
            {user.email !== email
              ? (
                <button
                  className={`btn btn-orange btn-lg ${requesting || requested ? 'submitting' : ''}`}
                  data-ride-id
                  href={rideId}
                  type="button"
                  disabled={requested}
                  onClick={handleRequest}
                >
                  {
                    requesting
                      ? 'requesting'
                      : requested ? 'request pending' : 'Join this Ride'
                  }
                </button>
              ) : ''
  }
            <Link className="btn btn-orange-inverse btn-lg" to="/home">More Rides</Link>
          </div>
        </div>
        <div className="driver-profile">
          <h1>Driver Profile</h1>
          <img src={`http://i.pravatar.cc/150?u=${email}`} alt="host-img" />
          <h2 className="driver-name">
            {rideCreator}
          </h2>
          <hr style={{ border: '3px solid #f1f1f1' }} />
          <p>
            email:
            {' '}
            {email}
          </p>
          <p>
            phone:
            {' '}
            {phone || '+234'}
          </p>
          <hr style={{ border: '3px solid #f1f1f1' }} />
        </div>
      </div>
    </Fragment>
  );
};

RideDetails.propTypes = {
  ride: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  requested: PropTypes.bool.isRequired,
  requesting: PropTypes.bool.isRequired,
  handleRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth, rideDetails }) => ({
  user: auth.user,
  requested: rideDetails.requested,
  requesting: rideDetails.requesting,
});

export default connect(mapStateToProps)(RideDetails);
