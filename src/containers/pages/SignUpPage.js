import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import FormSubmitButton from '../../components/FormSubmitButton';
import signUp, { clearError } from '../../actions/signUp';

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      password: '',
      password2: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeErrorReport = this.removeErrorReport.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { handleSignUp } = this.props;
    const {
      fullName,
      email,
      password,
      password2,
    } = this.state;
    handleSignUp(fullName, email, password, password2);
    event.preventDefault();
  }

  removeErrorReport() {
    const { error, clearFormError } = this.props;
    if (!error) return;
    clearFormError();
  }

  render() {
    const {
      fullName,
      email,
      password,
      password2,
    } = this.state;
    const { isAuthenticated, signingIn, error } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/home" />;
    }
    return (
      <Fragment>
        <header className="app-grid">
          <Navbar />
        </header>
        <main className="app-grid site-content">
          <div className="layout-grid hero p-100">
            <h1>Register to get started</h1>
            <form
              onKeyDown={this.removeErrorReport}
              onSubmit={this.handleSubmit}
              id="register"
            >
              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Jamiu Salami"
                    onChange={this.handleInputChange}
                    value={fullName}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  E-mail
                  <input
                    type="email"
                    id="email"
                    placeholder="jamius@sample.com"
                    onChange={this.handleInputChange}
                    value={email}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    id="password"
                    placeholder="enter your password"
                    onChange={this.handleInputChange}
                    value={password}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password2">
                  Confirm Password
                  <input
                    type="password"
                    id="password2"
                    placeholder="enter same password as above"
                    onChange={this.handleInputChange}
                    value={password2}
                    required
                  />
                </label>
                <div className="report error">{error}</div>
              </div>
              <FormSubmitButton submitting={signingIn} />
              <span className="member-status">
                <i>
                  Already a member?
                  <Link to="/login" rel="js">Sign in</Link>
                </i>
              </span>
            </form>
          </div>
        </main>
      </Fragment>
    );
  }
}

SignUpPage.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  signingIn: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  clearFormError: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth, users }) => {
  const { signingIn, error } = users;
  const { isAuthenticated } = auth;
  return { isAuthenticated, signingIn, error };
};

const mapDispatchToProps = dispatch => ({
  handleSignUp(fullName, email, password, password2) {
    dispatch(signUp(fullName, email, password, password2));
  },

  clearFormError() {
    dispatch(clearError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
