import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';

const LoginPage = () => (
  <Fragment>
    <header className="app-grid">
      <Navbar />
    </header>
    <main className="app-grid site-content">
      <div className="layout-grid hero p-100">
        <h1>Login</h1>
        <form id="register">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="jamius@sample.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="enter your password" required />
            <div className="report" />
          </div>
          <input className="btn btn-lg btn-submit btn-orange" type="submit" value="submit" />
          <span className="member-status">
            <i>
              Not a member?
              <Link to="/register" rel="js">Sign up</Link>
            </i>
          </span>
        </form>
      </div>
    </main>
  </Fragment>
);

export default LoginPage;
