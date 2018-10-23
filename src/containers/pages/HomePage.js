import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar'; // eslint-disable-line import/no-named-as-default
import Search from '../../components/Search';
import FetchingSpinner from '../../components/FetchingSpinner';
import loadRideOffers from '../../actions/loadRideOffers';
import RideOffer from '../../components/RideOffer';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    const { fetchRideOffers, rideOffers } = this.props;
    if (rideOffers.length) {
      return;
    }
    fetchRideOffers();
  }

  render() {
    const { loadingRides, rideOffers } = this.props;
    return (
      <Fragment>
        <header className="app-grid">
          <Navbar />
        </header>
        <section className="app-grid site-content">
          <div className="layout-grid">
            <Search />
            <div className="ride-results">
              { loadingRides
                ? <FetchingSpinner />
                : rideOffers && rideOffers
                  .map(
                    ride => (
                      <RideOffer key={ride.rideId} ride={ride} />
                    ),
                  ) }
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

HomePage.propTypes = {
  loadingRides: PropTypes.bool.isRequired,
  fetchRideOffers: PropTypes.func.isRequired,
  rideOffers: PropTypes.array.isRequired,
};

const mapStateToProps = ({ rides }) => {
  const { loadingRides, rideOffers } = rides;
  return {
    loadingRides,
    rideOffers,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRideOffers() {
    dispatch(loadRideOffers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
