import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navlinks = ({ user, signOut }) => {
  if (user && user !== undefined) {
    return (
      <Fragment>
        <li><Link className="brand" to="/">RideMyWay</Link></li>
        <li><Link to="/create">Offer a Ride</Link></li>
        <li><Link to="/home">View Rides</Link></li>
        <li className="dropdown">
          <a>
            Hi,
            {` ${user.fullName.split(' ')[0]}`}
            <i className="fa fa-chevron-down" />
          </a>
          <ul className="dropdown-content">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/user/rides">My Ride Offers</Link></li>
            <li><Link onClick={signOut} to="/logout">Sign out</Link></li>
          </ul>
        </li>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <li>
        <Link to="/" className="brand">RideMyWay</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
};

Navlinks.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    fullName: PropTypes.string,
    phone: PropTypes.string,
    userId: PropTypes.number,
  }),
  signOut: PropTypes.func,
};

Navlinks.defaultProps = {
  signOut: () => null,
};

Navlinks.defaultProps = {
  user: undefined,
};

export default Navlinks;
