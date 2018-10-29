import React from 'react';
import PropTypes from 'prop-types';

const UsersRides = ({ ride: { origin, destination, rideId } }) => (
  <tr>
    <td>
      <i className="fa fa-cab" aria-hidden="true" />
    </td>
    <td>
      <h3>
        {origin}
        {' '}
        <span>
          <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
        </span>
        {' '}
        {destination}
      </h3>
    </td>
    <td>
      <a href={`/user/rides/${rideId}/requests`} className="btn btn-orange">
        View requests
      </a>
    </td>
  </tr>
);

UsersRides.propTypes = {
  ride: PropTypes.object.isRequired,
};

export default UsersRides;
