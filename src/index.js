import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import './index.css';
import Trips from './components/trips.connected';
import NewTrip from './components/newTrip';
import registerServiceWorker from './registerServiceWorker';
import { fetchAllTrips } from './actions/initialise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers();

const store = createStore(reducers, enhancers);

fetchAllTrips().then(action => {
	store.dispatch(action);
});

render(
	<Provider store={store}>
		<div className="expensor">
			<Trips/>
			<NewTrip />
		</div>
	</Provider>,
	document.getElementById('root')
);

//registerServiceWorker();