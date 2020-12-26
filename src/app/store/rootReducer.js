import { combineReducers } from '@reduxjs/toolkit';
import auth from 'app/auth/store';
import fuse from './fuse';
import i18n from './i18nSlice';
import { sootblowReducer } from './reducers';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,
		i18n,
		sootblowReducer,
		...asyncReducers
	});

export default createReducer;
