import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import root reducer
import rootReducer from './reducers/index';

// import collection data
import games from './data/testData';
import comments from './data/comments';

// create an object for the default data
const defaultState = {
	games,
	comments
};

const enhancers = compose(
	applyMiddleware(thunk),
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