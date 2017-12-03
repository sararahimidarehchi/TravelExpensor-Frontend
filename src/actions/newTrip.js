import fetch from 'cross-fetch';

export const createNewTrip = () => (
	dispatch,
	getState
) => {
	debugger;
	// This should create the trip and redirect to the right location
	return window.location('/'); // TODO
};

export const setNewTripName = name => {
	return {
		type: 'SET_NEW_TRIP_NAME',
		payload: name
	}
};

export const setNewTripParticipants = participants => {
	return {
		type: 'SET_NEW_TRIP_PARTICIPANTS',
		payload: participants
	}
};

export const setNewTripCurrency = currency => {
	return {
		type: 'SET_NEW_TRIP_CURRENCY',
		payload: currency
	}
};
