import React from 'react';

const RidesOffered = ({ rides }) => rides.map((ride) => {
  const { destination, origin, rideId } = ride;
  return (
    <tr key={rideId}>
      <td>{origin}</td>
      <td>{destination}</td>
    </tr>
  );
});

export default RidesOffered;
