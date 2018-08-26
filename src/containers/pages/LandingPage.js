import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';

const LandingPage = () => (
  <React.Fragment>
    <div className="splash">
      <header className="app-grid">
        <Navbar />
      </header>
      <main className="app-grid ">
        <div className="layout-grid hero">
          <h1>Ridesharing made easy</h1>
          <p>
            Ride-my-way is a peer-to-peer ridesharing platform focusing on long-distance
            travel. Planning a road trip? You can use Ride-my-way to put those empty seats
            to good use and find paying passengers for your car, or to find yourself a
            ride to wherever you want to go.
          </p>
          <Link className="btn btn-orange btn-lg" to="/register">Get Started</Link>
        </div>
      </main>
    </div>
    <section className="app-grid black-bg">
      <div className="layout-grid how">
        <h1>How it works</h1>
        <div className="steps">
          <div className="card">
            <h2>
              Offer/Find a Ride
              <i className="fa fa-cab" aria-hidden="true" />
            </h2>
            <hr />
            <p>You can Offer a Ride as a driver or Join other Ride offers.</p>
          </div>
          <div className="card">
            <h2>
              Confirm Ride
              <i className="fa fa-thumbs-o-up" aria-hidden="true" />
            </h2>
            <hr />
            <p>
              Confirm ride details if you are joining one. Otherwise confirm your
              passengers profile to make sure they are a right fit for you.\
            </p>
          </div>
          <div className="card">
            <h2>
              Enjoy
              <i className="fa fa-smile-o" aria-hidden="true" />
            </h2>
            <hr />
            <p>
              Seriously, that&apos;s all you need to do. Ride-my-way will take care of the
              nitty-gritty.
            </p>
          </div>
        </div>
        <Link className="btn btn-orange btn-lg centered" to="/create">Offer a Ride</Link>
      </div>
    </section>
  </React.Fragment>
);

export default LandingPage;
