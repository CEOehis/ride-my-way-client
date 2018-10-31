import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import fetchUsersRides from '../../actions/myRides';
import UsersRides from '../../components/UsersRides';

class MyRideOffersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsersRides());
  }

  render() {
    const { rides, loading } = this.props;
    return (
      <React.Fragment>
        <header className="app-grid">
          <Navbar />
        </header>
        <section className="app-grid site-content">
          <div className="layout-grid">
            <div className="instructions">
              <h2>Ride Offers </h2>
              <p>
                View the requests for your ride offers
                and decide if you want them on a trip with you or not.
              </p>
            </div>
            <div className="upcoming-trips">
              <table>
                <tbody>
                  {
                    loading
                      ? <i style={{ textAlign: 'center', display: 'block' }} className="fa fa-spinner fa-spin fa-pulse fa-5x" aria-hidden="true" />
                      : rides && rides.map(ride => <UsersRides key={ride.rideId} ride={ride} />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.myRides.loading,
  rides: state.myRides.data,
});

MyRideOffersPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rides: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(MyRideOffersPage);
