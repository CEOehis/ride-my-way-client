import React from 'react';
import PropTypes from 'prop-types';

const RideInfo = ({ error, ride: { origin, destination } }) => {
  if (error) {
    return (
      <React.Fragment>
        <h2>Ride information</h2>
        <h3>Unable to fetch ride information at this time</h3>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h2>Ride information</h2>
      <h3>
        {origin}
        {' '}
        <span>
          <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
        </span>
        {' '}
        {destination}
      </h3>
    </React.Fragment>
  );
};

RideInfo.propTypes = {
  error: PropTypes.string,
  ride: PropTypes.object.isRequired,
};

RideInfo.defaultProps = {
  error: '',
};

export default RideInfo;
