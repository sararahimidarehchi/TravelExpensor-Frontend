const newEntry = (state = {}, action) => {
	switch (action.type) {
		case 'SET_NEW_ENTRY_TITLE':
			return {...state, title: action.payload};
		case 'SET_NEW_ENTRY_PAIDBY':
			return {...state, paidBy: action.payload};
		case 'SET_NEW_ENTRY_COST':
			return {...state, cost: action.payload};
		case 'SET_NEW_ENTRY_PARTICIPANTS':
			return {...state, participants: action.payload};
		case 'SET_NEW_ENTRY_CURRENCY':
			return {...state, currency: action.payload};
		default:
			return state
	}
};

export default newEntry;