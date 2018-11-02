import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'offered',
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(event) {
    this.setState({
      activeTab: event.target.id,
    });
  }

  render() {
    const { user } = this.props;
    const { activeTab } = this.state;
    return (
      <Fragment>
        <header className="app-grid">
          <Navbar />
        </header>
        <section className="app-grid site-content">
          <div className="layout-grid">
            <div className="">
              <h2>My Profile</h2>
            </div>
            <div className="profile-details">
              <h3>Personal Information</h3>
              <div className="user-profile">
                <div className="user-profile-summary">
                  <img src={user.fullName && `https://ui-avatars.com/api/?name=${user.fullName}&size=100&background=C0DFFF&font-size=0.33&size=150&background=C0DFFF&font-size=0.33`} alt="" />
                  <div className="user-profile-info">
                    <h2 className="user-name">{user.fullName}</h2>
                    <p>{user.phone === null ? '+234' : user.phone}</p>
                    <p>{user.email}</p>
                  </div>
                </div>
                <button type="button" className="btn btn-orange">Edit Profile</button>
              </div>
              <h3>My Rides</h3>
              <div className="ride-history">
                <div className="tab">
                  <button
                    onClick={this.toggleTab}
                    type="button"
                    className={`tablink ${activeTab === 'taken' ? 'active' : ''}`}
                    id="taken"
                  >
                    Rides Taken
                    <span />
                  </button>
                  <button
                    onClick={this.toggleTab}
                    type="button"
                    id="offered"
                    className={`tablink ${activeTab === 'offered' ? 'active' : ''}`}
                  >
                    Rides Offered
                    <span />
                  </button>
                </div>
                <div id="rides-taken" className={`tab-content ${activeTab === 'taken' ? 'show' : ''}`}>
                  <table>
                    <thead>
                      <tr>
                        <th>From</th>
                        <th>To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ikeja</td>
                        <td>Obalende</td>
                      </tr>
                      <tr>
                        <td>Maryland</td>
                        <td>Mushin</td>
                      </tr>
                      <tr>
                        <td>Lekki</td>
                        <td>Oshodi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="rides-offered" className={`tab-content ${activeTab === 'offered' ? 'show' : ''}`}>
                  <table>
                    <thead>
                      <tr>
                        <th>From</th>
                        <th>To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ikeja</td>
                        <td>Obalende</td>
                      </tr>
                      <tr>
                        <td>Maryland</td>
                        <td>Mushin</td>
                      </tr>
                      <tr>
                        <td>Ikeja</td>
                        <td>Obalende</td>
                      </tr>
                      <tr>
                        <td>Maryland</td>
                        <td>Mushin</td>
                      </tr>
                      <tr>
                        <td>Ikeja</td>
                        <td>Obalende</td>
                      </tr>
                      <tr>
                        <td>Maryland</td>
                        <td>Mushin</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

ProfilePage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfilePage);
