import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import './index.css';
import FirstPage from './components/firstPage';
import CreateNewPage from './components/createNewPage';
import TripDetailsPage from './components/tripDetailsPage';
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
			<Router>
				<div>
					<Route exact path="/" component={FirstPage}/>
					<Route path="/new" component={CreateNewPage}/>
					<Route path="/trip/:uuid" component={TripDetailsPage}/>
				</div>
			</Router>
		</div>
	</Provider>,
	document.getElementById('root')
);

//registerServiceWorker();