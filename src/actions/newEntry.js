export const addNewEntry = () => (
	dispatch,
	getState
) => {
	debugger;
	// TODO
	// This should add the entry and add it to state
};

export const setNewEntryTitle = title => {
	return {
		type: 'SET_NEW_ENTRY_TITLE',
		payload: title
	}
};

export const setNewEntryPaidBy = paidBy => {
	return {
		type: 'SET_NEW_ENTRY_PAIDBY',
		payload: paidBy
	}
};

export const setNewEntryCost = cost => {
	return {
		type: 'SET_NEW_ENTRY_COST',
		payload: cost
	}
};

export const setNewEntryParticipants = participants => {
	return {
		type: 'SET_NEW_ENTRY_PARTICIPANTS',
		payload: participants
	}
};

export const setNewEntryCurrency = currency => {
	return {
		type: 'SET_NEW_ENTRY_CURRENCY',
		payload: currency
	}
};


setNewEntryTitle,
	setNewEntryPaidBy,
	setNewEntryCost,
	setNewEntryParticipants,
	setNewEntryCurrency,
	addNewEntry