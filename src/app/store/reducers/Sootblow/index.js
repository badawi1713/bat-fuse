import { SET_SOOTBLOW } from 'app/store/constants';

const initialState = {
	sootblowData: {},
	loading: false,
	error: {}
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
