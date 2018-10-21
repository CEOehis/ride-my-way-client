import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import loadRideDetails from '../../actions/loadRideDetails';
import RideDetails from '../../components/RideDetails';

class RideDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // obtain rideId from url params
    const { match, fetchRideDetails } = this.props;
    const { rideId } = match.params;
    // fetch ride details and render
    fetchRideDetails(rideId);
  }

  render() {
    const { ride, loading } = this.props;
    return (
      <Fragment>
        <header className="app-grid">
          <Navbar />
        </header>
        <main className="app-grid site-content">
          <div className="layout-grid" id="ride">
            {loading ? <i style={{ textAlign: 'center', display: 'block' }} className="fa fa-spinner fa-spin fa-pulse fa-5x" aria-hidden="true" />
              : <RideDetails ride={ride} />}
          </div>
        </main>
      </Fragment>
    );
  }
}

RideDetailsPage.propTypes = {
  ride: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchRideDetails: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchRideDetails(rideId) {
    return dispatch(loadRideDetails(rideId));
  },
});

const mapStateToProps = state => ({
  ride: state.rideDetails.data,
  loading: state.rideDetails.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(RideDetailsPage);
