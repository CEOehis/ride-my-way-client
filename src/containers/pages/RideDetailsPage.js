import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import loadRideDetails, { requestRide } from '../../actions/loadRideDetails';
import RideDetails from '../../components/RideDetails';

class RideDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.request = this.request.bind(this);
  }

  componentDidMount() {
    // obtain rideId from url params
    const { match, fetchRideDetails } = this.props;
    const { rideId } = match.params;
    // fetch ride details and render
    fetchRideDetails(rideId);
  }

  request() {
    const { match, handleRequestRide } = this.props;
    const { rideId } = match.params;
    handleRequestRide(rideId);
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
              : <RideDetails ride={ride} handleRequest={this.request} />}
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
  handleRequestRide: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchRideDetails(rideId) {
    return dispatch(loadRideDetails(rideId));
  },
  handleRequestRide(rideId) {
    return dispatch(requestRide(rideId));
  },
});

const mapStateToProps = state => ({
  ride: state.rideDetails.data,
  loading: state.rideDetails.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(RideDetailsPage);
