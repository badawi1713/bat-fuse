import { GET_SOOTBLOW_DATA_FAILED, GET_SOOTBLOW_DATA_REQUEST, GET_SOOTBLOW_DATA_SUCCESS } from 'app/store/constants';

const initialState = {
	sootblowData: {},
	loading: false,
	error: {}
};

const sootblowReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SOOTBLOW_DATA_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_SOOTBLOW_DATA_SUCCESS:
			return {
				...state,
				sootblowData: action.payload.data,
				loading: false
			};
		case GET_SOOTBLOW_DATA_FAILED:
			return {
				...state,
				error: action.payload.error,
				loading: false
			};
		default:
			return {
				state
			};
	}
};

export default sootblowReducer;
