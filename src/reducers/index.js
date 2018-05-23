import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import operations from './operations';

export default combineReducers({
  routing: routerReducer,
  operations
});
