import auth from 'app/auth/store';
import { combineReducers } from 'redux';
import fuse from './fuse';
import i18n from './i18nSlice';
import { combustionReducer, sootblowReducer } from './reducers';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,
		i18n,
		sootblowReducer,
		combustionReducer,
		...asyncReducers
	});

export default createReducer;
