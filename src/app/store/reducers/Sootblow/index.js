import { SET_SOOTBLOW } from 'app/store/constants';

const initialState = {
	sootblowData: {},
	parameterDetailData: {},
	loading: false,
	loadingSootblowData: false,
	error: '',
	errorSootblow: false
};

const sootblowReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SOOTBLOW:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default sootblowReducer;
