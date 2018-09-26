import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar';
import FormSubmitButton from '../../components/FormSubmitButton';

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
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const {
      fullName,
      email,
      password,
      password2,
    } = this.state;

    return (
      <Fragment>
        <header className="app-grid">
          <Navbar />
        </header>
        <main className="app-grid site-content">
          <div className="layout-grid hero p-100">
            <h1>Register to get started</h1>
            <form id="register">
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
                <div className="report" />
              </div>
              <FormSubmitButton submitting={false} />
              <span className="member-status">
                <i>
                  Already a member?
                  <a href="#/login" rel="js">Sign in</a>
                </i>
              </span>
            </form>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default SignUpPage;
