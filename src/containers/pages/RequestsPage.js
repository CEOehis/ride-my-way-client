import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

class RequestsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <header className="app-grid">
          <Navbar />
        </header>
        <section className="app-grid site-content">
          <div className="layout-grid">
            <div className="instructions">
              <h2>Trip details </h2>
              <p>Respond to requests for this ride offer.</p>
            </div>
            <div className="ride-requests">
              <i style={{ textAlign: 'center', display: 'block' }} className="fa fa-spinner fa-spin fa-pulse fa-5x" aria-hidden="true" />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default RequestsPage;
