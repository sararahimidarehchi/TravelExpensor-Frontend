import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Trip from './trip';
import './trips.css';


class Trips extends Component {
	render() {
		const tripsArray = this.props.trips.map(trip => {
			return (
					<Trip
							name={trip.name}
							UUID={trip.id}
					/>
			);
		});
		return (
			<div className="trips">
				<div>{tripsArray}</div>
			</div>
		);
	}
}

Trips.propTypes = {
	trips: PropTypes.array
};

export default Trips;