import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import games from './games';
import comments from './comments';

const rootReducer = combineReducers({games, comments, routing: routerReducer });

export default rootReducer;