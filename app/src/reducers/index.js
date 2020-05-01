import { combineReducers } from 'redux';
import viewer from './viewer';
import authenticated from './authentificated';

const rootReducer = combineReducers({
	viewer,
	authenticated,
});

export default rootReducer;
