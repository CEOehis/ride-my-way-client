import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parseTime from '../utils/parseTime';

const RideOffer = ({ ride }) => {
  const {
    origin,
    destination,
    rideCreator,
    departureDate,
    departureTime,
    seats,
    rideId,
  } = ride;
  return (
    <div className="available-ride">
      <div className="path">
        <h4>
          {origin}
          <span>&gt;&gt;</span>
          {destination}
        </h4>
      </div>
      <div className="ride-summary">
        <div className="profile">
          <img src={rideCreator && `https://ui-avatars.com/api/?name=${rideCreator}&size=100&background=C0DFFF&font-size=0.33`} alt="driver" />
          <div className="driver">
            <h4>{rideCreator}</h4>
            <p>
              {moment(departureDate).format('MMM DD, YYYY')}
              ,
              {parseTime(departureTime)}
            </p>
          </div>
        </div>
        <div className="ride-info">
          <p className="seats">
            Available seats:
            {seats}
          </p>
        </div>
        <div className="actions">
          <Link to={`/ride/${rideId}`} className="btn btn-orange btn-lg">Details</Link>
        </div>
      </div>
    </div>
  );
};

RideOffer.propTypes = {
  ride: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    rideCreator: PropTypes.string.isRequired,
    departureDate: PropTypes.string.isRequired,
    departureTime: PropTypes.string.isRequired,
    seats: PropTypes.number.isRequired,
    rideId: PropTypes.number.isRequired,
  }).isRequired,
};

export default RideOffer;
