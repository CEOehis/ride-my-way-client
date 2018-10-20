import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Navbar from '../../components/Navbar';
import signIn from '../../actions/signIn';
import FormSubmitButton from '../../components/FormSubmitButton';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    const { handleSignIn } = this.props;
    handleSignIn(email, password);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    const { signingIn } = this.props;
    const { isAuthenticated } = this.props;
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
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit} id="register">
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  onChange={this.handleInputChange}
                  type="email"
                  id="email"
                  value={email}
                  placeholder="jamius@sample.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.handleInputChange}
                  type="password"
                  id="password"
                  value={password}
                  placeholder="enter your password"
                  required
                />
                <div className="report" />
              </div>
              <FormSubmitButton submitting={signingIn} />
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
  }
}

LoginPage.propTypes = {
  signingIn: PropTypes.bool.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleSignIn(email, password) {
    dispatch(signIn(email, password));
  },
});

const mapStateToProps = ({ users, auth }) => {
  const { signingIn, error } = users; // eslint-disable-line
  const { isAuthenticated } = auth;
  return { isAuthenticated, signingIn, error }; // eslint-disable-line
};

// export default LoginPage;
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
