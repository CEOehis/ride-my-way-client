import React from 'react';

const Search = () => (
  <div className="instructions">
    <h2>
      Available Ride Offers
      <i className="fa fa-search " />
    </h2>
    <form className="search">
      <div className="form-group">
        <label htmlFor="origin">
          Origin
        </label>
        <input type="text" id="origin" placeholder="Where from" required />
      </div>
      <div className="form-group">
        <label htmlFor="destination">
          Destination
        </label>
        <input type="text" id="destination" placeholder="Where to" required />
      </div>
      <input className="btn btn-submit btn-orange" type="submit" value="submit" />
    </form>
    <p>Find and select your route, then sit back and relax: we will take care of the rest!</p>
  </div>
);

export default Search;
