import React from 'react';
import PropTypes from 'prop-types';
import Trip from './trip';
import './trips.css';

const Trips = ({ trips }) => {

	const tripsArray = trips.map(trip => {
		return (
				<Trip
					name={trip.name}
					UUID={trip.UUID}
				/>
		);
	});

	return (
			<div className="trips">
				<div>{tripsArray}</div>
			</div>
	);
};

Trips.propTypes = {
	trips: PropTypes.array
};

export default Trips;