import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navlinks from './Navlinks';
import signOut from '../actions/signOut';

export class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      mobileNavVisible: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  toggleMenu() {
    const { mobileNavVisible } = this.state;
    this.setState({
      mobileNavVisible: !mobileNavVisible,
    });
  }

  handleSignOut() {
    const { logOut } = this.props;
    logOut();
  }

  render() {
    const { mobileNavVisible } = this.state;
    const { user, isAuthenticated } = this.props;
    return (
      <nav className="layout-grid navbar">
        <h1 className="brand"><Link to="/">RideMyWay</Link></h1>
        <button onClick={this.toggleMenu} className="menu btn" type="button">
          <i className="fa fa-navicon" aria-hidden="true" />
        </button>
        <ul className={mobileNavVisible ? 'nav-links expanded' : 'nav-links'}>
          <Navlinks isAuthenticated={isAuthenticated} user={user} signOut={this.handleSignOut} />
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  isAuthenticated: auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  logOut() {
    dispatch(signOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
