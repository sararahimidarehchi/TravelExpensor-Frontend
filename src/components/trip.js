import React from 'react';
import PropTypes from 'prop-types';
import './trip.css';

const Trip = ({ name, UUID }) => {

	return (
		<li className="trip">
			<a
				href={UUID}
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