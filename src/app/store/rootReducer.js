import { combineReducers } from 'redux';
import auth from 'app/auth/store';
import fuse from './fuse';
import i18n from './i18nSlice';
import { sootblowReducer, combustionReducer, efficiencyReducer } from './reducers';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,
		i18n,
		sootblowReducer,
		combustionReducer,
		efficiencyReducer,
		...asyncReducers
	});

export default createReducer;
