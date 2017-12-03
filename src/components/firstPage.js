import React from 'react';
import PropTypes from 'prop-types';
import Trips from './trips.connected.js';
import NewTrip from './newTrip';

const FirstPage = () => {

	return (
		<div>
			<Trips/>
			<NewTrip />
		</div>
	);
};

export default FirstPage;