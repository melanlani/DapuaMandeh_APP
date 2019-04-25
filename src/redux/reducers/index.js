import { combineReducers } from 'redux';

import accounts from './accounts';
import recipes from './recipes';
// import messages from './messages';

const reducers = combineReducers({
  accounts,
  recipes
  // messages
})

export default reducers;
