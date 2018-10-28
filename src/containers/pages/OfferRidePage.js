import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import offerRide from '../../actions/offerRide';
import FormSubmitButton from '../../components/FormSubmitButton';

class OfferRidePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    const { from, to, seats, time, date } = e.target.elements;
    const rideOfferData = {
      origin: from.value,
      destination: to.value,
      seats: seats.value,
      date: date.value,
      time: time.value,
    };

    dispatch(offerRide(rideOfferData))
      .then((response) => {
        if (response.status === 'success') {
          window.location.pathname = '/user/rides';
        }
      });
  }

  render() {
    const { submitting } = this.props;
    return (
      <React.Fragment>
        <header className="app-grid">
          <Navbar />
        </header>
        <section className="app-grid site-content">
          <div className="layout-grid ride-offer">
            <div className="">
              <h2>Post a Ride Offer</h2>
              <p>Add details of your ride offer and we'll find you paying passengers.</p>
            </div>
            <div className="">
              <form onSubmit={this.handleFormSubmit} id="offer-ride">
                <h3>Route information</h3>
                <div className="form-group">
                  <label htmlFor="from">
                    From
                    <input type="text" id="from" placeholder="Where from?" required />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="to">
                    To
                    <input type="text" id="to" placeholder="Where to?" required />
                  </label>
                  <div className="report" />
                </div>
                <h3>Departure information</h3>
                <div className="form-group">
                  <label htmlFor="date">
                    Date
                    <input type="date" id="date" required />
                  </label>
                  <div className="report" />
                </div>
                <div className="form-group">
                  <label htmlFor="time">
                    Time
                    <input type="time" id="time" required />
                  </label>
                  <div className="report" />
                </div>
                <h3>Vehicle information</h3>
                <div className="form-group">
                  <label htmlFor="seats">
                    Available seats
                    <input id="seats" type="number" name="seats" min="1" max="3" placeholder="eg 3" />
                  </label>
                  <div className="report" />
                </div>
                <div className="form-group">
                  <div className="report" />
                </div>
                <FormSubmitButton submitting={submitting} />
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

OfferRidePage.propTypes = {
  submitting: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  submitting: state.offerRide.loading,
});

export default connect(mapStateToProps)(OfferRidePage);
