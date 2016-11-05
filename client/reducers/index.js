import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {firebaseStateReducer} from 'redux-react-firebase';

import games from './games';
import comments from './comments';

const rootReducer = combineReducers({
	games, 
	comments, 
	routing: routerReducer,
	firebase: firebaseStateReducer });

export default rootReducer;