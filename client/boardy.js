import React from 'react';
import App from './components/App';
import Single from './components/Single';
import GameGrid from './components/GameGrid';
import AddGame from './components/AddGame';
import Profile from './components/Profile';

import { render } from 'react-dom';

// import css
import css from './styles/main.css';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>		
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={GameGrid}></IndexRoute>
				<Route path="/view/:objectId" component={Single}></Route>
				<Route path="/addgame" component={AddGame}></Route>
				<Route path="/account" component={Profile}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));