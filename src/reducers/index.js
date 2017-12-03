import { combineReducers } from 'redux'
import trips from './trips';
import newTrip from './newTrip';
import newEntry from './newEnrty';

const expensor = combineReducers({
	trips,
	newTrip,
	newEntry
});

export default expensor;
