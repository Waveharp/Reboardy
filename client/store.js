import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

// import collection data
const games = require('xml!./data/collection.xml');


// create an object for the default data
const defaultState = {
	games
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;