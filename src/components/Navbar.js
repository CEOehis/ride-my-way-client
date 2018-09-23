import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      mobileNavVisible: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { mobileNavVisible } = this.state;
    this.setState({
      mobileNavVisible: !mobileNavVisible,
    });
  }

  render() {
    const { mobileNavVisible } = this.state;
    return (
      <nav className="layout-grid navbar">
        <h1 className="brand"><Link to="/">RideMyWay</Link></h1>
        <button onClick={this.toggleMenu} className="menu btn" type="button">
          <i className="fa fa-navicon" aria-hidden="true" />
        </button>
        <ul className={mobileNavVisible ? 'nav-links expanded' : 'nav-links'}>
          <li>
            <Link to="/" className="brand">RideMyWay</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
