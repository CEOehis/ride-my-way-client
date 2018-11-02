import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import fetchOfferedHistory from '../../actions/profile';
import RidesOffered from '../../components/RidesOffered';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'offered',
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  componentDidMount() {
    // fetch user ride history
    const { dispatch } = this.props;
    dispatch(fetchOfferedHistory());
  }

  toggleTab(event) {
    this.setState({
      activeTab: event.target.id,
    });
  }

  render() {
    const { user, offeredRidesLoading, offeredRides } = this.props;
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
                {
                  user.fullName
                    ? (
                      <Fragment>
                        <div className="user-profile-summary">
                          <img src={user.fullName && `https://ui-avatars.com/api/?name=${user.fullName}&size=100&background=C0DFFF&font-size=0.33&size=150&background=C0DFFF&font-size=0.33`} alt="" />
                          <div className="user-profile-info">
                            <h2 className="user-name">{user.fullName}</h2>
                            <p>{user.phone === null ? '+234' : user.phone}</p>
                            <p>{user.email}</p>
                          </div>
                        </div>
                        <button type="button" className="btn btn-orange">Edit Profile</button>
                      </Fragment>
                    )
                    : <i style={{ textAlign: 'center', width: '100%', display: 'block' }} className="fa fa-spinner fa-spin fa-pulse fa-5x" aria-hidden="true" />
                }
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
                    Rides Offered (
                    {offeredRides && offeredRides.length}
                    )
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
                    <tbody />
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
                      {
                        offeredRidesLoading
                          ? null
                          : <RidesOffered rides={offeredRides} />
                      }
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
  dispatch: PropTypes.func.isRequired,
  offeredRidesLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  offeredRidesLoading: state.profile.ridesOffered.loading,
  offeredRides: state.profile.ridesOffered.data,
});

export default connect(mapStateToProps)(ProfilePage);
