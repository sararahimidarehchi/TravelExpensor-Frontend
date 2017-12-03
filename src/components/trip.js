import React from 'react';
import PropTypes from 'prop-types';
import './trip.css';

const Trip = ({ name, UUID }) => {

	const href = '/trip/' + UUID;
	return (
		<li className="trip">
			<a
				href={href}
			>
				{name}
			</a>
		</li>
	);
};

Trip.propTypes = {
	name: PropTypes.string,
	UUID: PropTypes.string
};

export default Trip;