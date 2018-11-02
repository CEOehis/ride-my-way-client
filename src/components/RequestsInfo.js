import React, { Fragment } from 'react';

const RequestsInfo = ({ error, requests, handleResponse }) => {
  if (error) {
    return (
      <div className="request-summary">
        Unable to fetch requests information at this time
      </div>
    );
  }

  return (
    requests.map(request => (
      <div key={request.requestId} className="request-summary">
        <div className="profile">
          <img src={request.requesterName && `https://ui-avatars.com/api/?name=${request.requesterName}&background=C0DFFF&font-size=0.33`} alt="" />
          <div className="driver">
            <h4>{request.requesterName.split(' ')[0]}</h4>
          </div>
        </div>
        <div className="actions">
          {
            request.offerStatus === 'pending'
              ? (
                <Fragment>
                  <button
                    type="button"
                    data-request-id={request.requestId}
                    data-ride-id={request.rideId}
                    data-action="accept"
                    className="btn btn-orange"
                    onClick={handleResponse}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    data-request-id={request.requestId}
                    data-ride-id={request.rideId}
                    data-action="reject"
                    className="btn btn-orange-inverse"
                    onClick={handleResponse}
                  >
                    Reject
                  </button>
                </Fragment>
              )
              : (
                <span>
                  Request
                  {' '}
                  {request.offerStatus}
                </span>
              )
          }
        </div>
      </div>
    ))
  );
};

export default RequestsInfo;
