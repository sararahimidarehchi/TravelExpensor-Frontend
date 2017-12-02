const trips = (state = [], action) => {
	switch (action.type) {
		case 'INITIALISE_APP':
			return action.payload;
		default:
			return state
	}
};

export default trips;