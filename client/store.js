import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import root reducer
import rootReducer from './reducers/index';

// import collection data
import games from './data/testData';
import comments from './data/comments';

// firebase
import 'firebase';
import {reduxReactFirebase} from 'redux-react-firebase';

var config = {
	apiKey: "AIzaSyC5FO8SBGwYcSZ3IMGu2adI2iPul0FwAdY",
  authDomain: "project-4553713265761533610.firebaseapp.com",
  databaseURL: "https://project-4553713265761533610.firebaseio.com",
  storageBucket: "project-4553713265761533610.appspot.com",
}

// create an object for the default data
const defaultState = {
	games,
	comments
};

const enhancers = compose(
	applyMiddleware(thunk),
	reduxReactFirebase(config),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
	rootReducer, 
	defaultState, 
	enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

// hot reload reducers
if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;