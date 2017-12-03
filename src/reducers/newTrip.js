const newTrip = (state = {}, action) => {
	switch (action.type) {
		case 'SET_NEW_TRIP_NAME':
			return {...state, name: action.payload};
		case 'SET_NEW_TRIP_PARTICIPANTS':
			return {...state, participants: action.payload};
		case 'SET_NEW_TRIP_CURRENCY':
			return {...state, currency: action.payload};
		default:
			return state
	}
};

export default newTrip;