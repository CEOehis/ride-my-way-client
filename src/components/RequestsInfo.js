import React, { Fragment } from 'react';

const RequestsInfo = ({ error, requests }) => {
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
          <img src="https://placehold.it/64/64" alt="" />
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
                    data-req-id={request.requestId}
                    data-ride-id={request.rideId}
                    data-action="accept"
                    className="btn btn-orange"
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    data-req-id={request.requestId}
                    data-ride-id={request.rideId}
                    data-action="reject"
                    className="btn btn-orange-inverse"
                  >
                    Reject
                  </button>
                </Fragment>
              )
              : (
                <span>
                  Request
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
