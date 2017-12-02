import fetch from 'cross-fetch';

export const fetchAllTrips = () => {
	return fetch('http://localhost:8080/trips')
		.then((res) => {
			return ({
				type: 'INITIALISE_APP',
				payload: JSON.parse(res._bodyText).entity.trips
			});
		});
};
