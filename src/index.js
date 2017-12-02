import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import './index.css';
import Trips from './components/trips';
import NewTrip from './components/newTrip';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers);
const trips = [
	{
		name: 'a trip',
		UUID: '234'
	},
	{
		name: 'another trip',
		UUID: 'dkeh'
	}
];
//store.dispatch(initialize);
render(
	<Provider store={store}>
		<div className="expensor">
			<Trips trips={trips}/>
			<NewTrip />
		</div>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();