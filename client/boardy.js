import React from 'react';
import App from './components/App';
import Single from './components/Single';
import GameGrid from './components/GameGrid';
import AddGame from './components/AddGame';

import { render } from 'react-dom';

// import css
import css from './styles/main.css';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// get collection data
// var data = require('xml!./data/collection.xml');
// console.dir(data);

// var test = data.items.item[1].name;
// console.log(test);
// above code works! pulls in data from downloaded xml file

const router = (
	<Provider store={store}>		
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={GameGrid}></IndexRoute>
				<Route path="/view/:objectId" component={Single}></Route>
				<Route path="/addgame" component={AddGame}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));